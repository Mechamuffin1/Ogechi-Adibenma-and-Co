/* Rotating continent globe for the Practice Area section.
   Fully self-contained: Three.js and the world map data are loaded as local
   scripts (js/three.min.js, js/world-geo.js) — no fetch(), no CDN — so it
   works when served AND when the file is opened directly. Falls back to a
   styled CSS sphere if WebGL or Three.js is unavailable. */

(function () {
  "use strict";

  var mount = document.querySelector(".globe");
  if (!mount) return;

  var HIGHLIGHT = {
    "Nigeria": "Nigeria",
    "United Kingdom": "United Kingdom",
    "United States of America": "United States",
    "China": "China",
    "Japan": "Japan"
  };
  var ANCHORS = {
    "Nigeria": [9.1, 8.7],
    "United Kingdom": [54.0, -2.4],
    "United States of America": [39.5, -98.5],
    "China": [35.9, 104.2],
    "Japan": [36.5, 138.2]
  };
  // screen-position fallbacks (percent of box) for the CSS globe
  var FALLBACK_POS = {
    "Nigeria": [56, 55], "United Kingdom": [60, 30],
    "United States of America": [24, 42], "China": [82, 40], "Japan": [90, 37]
  };

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function hasWebGL() {
    try {
      var c = document.createElement("canvas");
      return !!(window.WebGLRenderingContext && (c.getContext("webgl") || c.getContext("experimental-webgl")));
    } catch (e) { return false; }
  }

  function latLonToVec3(lat, lon, r, THREE) {
    var phi = (90 - lat) * Math.PI / 180;
    var theta = (lon + 180) * Math.PI / 180;
    return new THREE.Vector3(
      -r * Math.sin(phi) * Math.cos(theta),
      r * Math.cos(phi),
      r * Math.sin(phi) * Math.sin(theta)
    );
  }

  function buildTexture(geo) {
    var W = 2048, H = 1024;
    var c = document.createElement("canvas");
    c.width = W; c.height = H;
    var ctx = c.getContext("2d");
    ctx.fillStyle = "#e6edf8";
    ctx.fillRect(0, 0, W, H);
    function project(lon, lat) { return [(lon + 180) / 360 * W, (90 - lat) / 180 * H]; }
    function pathPoly(rings) {
      ctx.beginPath();
      for (var i = 0; i < rings.length; i++) {
        var ring = rings[i];
        for (var j = 0; j < ring.length; j++) {
          var p = project(ring[j][0], ring[j][1]);
          if (j === 0) ctx.moveTo(p[0], p[1]); else ctx.lineTo(p[0], p[1]);
        }
        ctx.closePath();
      }
    }
    function draw(geom, fill, stroke) {
      var polys = geom.type === "Polygon" ? [geom.coordinates] : geom.coordinates;
      for (var k = 0; k < polys.length; k++) {
        pathPoly(polys[k]);
        ctx.fillStyle = fill;
        ctx.fill("evenodd");
        if (stroke) {
          ctx.save();
          ctx.shadowColor = "rgba(127,169,221,0.9)";
          ctx.shadowBlur = 14;
          ctx.lineWidth = 2;
          ctx.strokeStyle = stroke;
          ctx.stroke();
          ctx.restore();
        }
      }
    }
    geo.features.forEach(function (f) {
      if (!HIGHLIGHT[f.properties.name]) draw(f.geometry, "#1b3a6e", null);
    });
    geo.features.forEach(function (f) {
      if (HIGHLIGHT[f.properties.name]) draw(f.geometry, "#3f7ad0", "#9dc0ec");
    });
    return c;
  }

  function initThree(geo, THREE) {
    var size = mount.clientWidth || 480;
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
    camera.position.z = 3.55;

    var renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
    renderer.setSize(size, size);
    mount.appendChild(renderer.domElement);

    // tilt parent gives a natural axial tilt so northern countries (UK) sit
    // comfortably in view rather than at the very top; inner group spins.
    var tilt = new THREE.Group();
    tilt.rotation.x = 0.34;
    scene.add(tilt);
    var group = new THREE.Group();
    tilt.add(group);

    var tex = new THREE.CanvasTexture(buildTexture(geo));
    if (renderer.capabilities.getMaxAnisotropy) tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
    group.add(new THREE.Mesh(new THREE.SphereGeometry(1, 64, 64), new THREE.MeshBasicMaterial({ map: tex })));
    group.add(new THREE.Mesh(new THREE.SphereGeometry(1.002, 64, 64),
      new THREE.MeshBasicMaterial({ color: 0x2f63b0, transparent: true, opacity: 0.06 })));

    var labelWrap = document.createElement("div");
    labelWrap.className = "globe-labels";
    mount.appendChild(labelWrap);
    var markers = Object.keys(ANCHORS).map(function (name) {
      var el = document.createElement("span");
      el.className = "globe-label";
      el.innerHTML = '<i class="globe-dot"></i><b class="globe-txt">' + HIGHLIGHT[name] + '</b>';
      labelWrap.appendChild(el);
      return { el: el, pos: latLonToVec3(ANCHORS[name][0], ANCHORS[name][1], 1.02, THREE) };
    });

    var worldPos = new THREE.Vector3(), camDir = new THREE.Vector3();
    window.addEventListener("resize", function () { renderer.setSize(mount.clientWidth || size, mount.clientWidth || size); }, { passive: true });
    group.rotation.y = -Math.PI / 2;

    function frame() {
      if (!reduce) group.rotation.y += 0.0016;
      group.updateMatrixWorld(true);
      renderer.render(scene, camera);
      var s = renderer.domElement.clientWidth;
      camera.getWorldDirection(camDir);
      markers.forEach(function (m) {
        worldPos.copy(m.pos).applyMatrix4(group.matrixWorld);
        var facing = -worldPos.clone().normalize().dot(camDir);
        var proj = worldPos.clone().project(camera);
        var x = (proj.x * 0.5 + 0.5) * s;
        var y = (-proj.y * 0.5 + 0.5) * s;
        m.el.style.opacity = Math.max(0, Math.min(1, (facing - 0.15) / 0.35)).toFixed(3);
        // dot sits exactly on the country; caption flips left near the right limb
        m.el.classList.toggle("flip", x > s * 0.6);
        m.el.style.transform = "translate(" + x + "px," + y + "px)";
      });
      requestAnimationFrame(frame);
    }
    frame();
  }

  function initFallback() {
    mount.classList.add("is-fallback");
    var sphere = document.createElement("div");
    sphere.className = "globe-fallback";
    mount.appendChild(sphere);
    Object.keys(FALLBACK_POS).forEach(function (name) {
      var d = document.createElement("span");
      d.className = "globe-fallback-city";
      d.setAttribute("data-city", HIGHLIGHT[name]);
      d.style.left = FALLBACK_POS[name][0] + "%";
      d.style.top = FALLBACK_POS[name][1] + "%";
      mount.appendChild(d);
    });
  }

  function start() {
    var geo = window.__WORLD_GEO;
    if (geo && window.THREE && hasWebGL()) {
      try { initThree(geo, window.THREE); return; }
      catch (e) { /* fall through */ }
    }
    initFallback();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
