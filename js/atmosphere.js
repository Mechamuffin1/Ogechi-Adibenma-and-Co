/* GSAP-driven ambient motion: liquid hero blobs (homepage) and the
   sliding block mosaic behind the Insights titles. Loaded only on pages
   that include GSAP; everything is skipped for reduced-motion users. */

(function () {
  "use strict";
  if (!window.gsap) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  /* Liquid hero: blobs drift, breathe and morph on long sine loops */
  if (document.querySelector(".blob--sky")) {
    gsap.to(".blob--sky", {
      xPercent: -14, yPercent: 12, scale: 1.14,
      borderRadius: "58% 42% 46% 54% / 44% 58% 42% 56%",
      duration: 13, ease: "sine.inOut", yoyo: true, repeat: -1
    });
  }
  if (document.querySelector(".blob--deep")) {
    gsap.to(".blob--deep", {
      xPercent: 12, yPercent: -9, scale: 1.2,
      borderRadius: "52% 48% 60% 40% / 56% 46% 54% 44%",
      duration: 17, ease: "sine.inOut", yoyo: true, repeat: -1
    });
  }
  if (document.querySelector(".blob--warm")) {
    gsap.to(".blob--warm", {
      xPercent: -10, yPercent: -16, scale: 1.28,
      duration: 11, ease: "sine.inOut", yoyo: true, repeat: -1
    });
  }

  /* Insights mosaic: flat blocks slide horizontally at alternating
     directions and staggered speeds, echoing the reference footage */
  document.querySelectorAll(".geo-block").forEach(function (block, i) {
    gsap.to(block, {
      xPercent: (i % 2 ? -1 : 1) * (28 + (i % 4) * 9),
      duration: 11 + (i % 5) * 3,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      delay: i * 0.35
    });
  });

  /* Globe: reveal each country label as its marker lights, in the same
     order and cadence as the CSS pulse (one every 4s across the 20s loop). */
  var cities = document.querySelectorAll(".globe-city");
  if (cities.length) {
    var i = 0;
    var cycle = function () {
      cities.forEach(function (c) { c.classList.remove("lit"); });
      cities[i % cities.length].classList.add("lit");
      i += 1;
    };
    cycle();
    setInterval(cycle, 4000);
  }
})();
