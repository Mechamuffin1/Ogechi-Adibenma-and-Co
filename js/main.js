/* OGECHI ADIBENMA & CO — site behaviour
   Mobile nav, scrolled-header state, scroll reveals, form handling. */

(function () {
  "use strict";

  /* ----- Header scrolled state ----- */
  var header = document.querySelector(".site-header");
  function onScroll() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ----- Mobile nav ----- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  /* ----- Parent-orchestrated stagger (YouVersion-style fade-stagger) -----
     Add data-stagger to a container and its .reveal children animate in
     sequence without individual data-delay attributes. */
  document.querySelectorAll("[data-stagger]").forEach(function (parent) {
    var step = parseFloat(parent.getAttribute("data-stagger")) || 0.14;
    parent.querySelectorAll(".reveal").forEach(function (el, i) {
      el.style.transitionDelay = (i * step).toFixed(2) + "s";
    });
  });

  /* ----- Scroll reveals (IntersectionObserver) ----- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ----- Consultation forms -----
     Forms post to the endpoint in their `action` attribute (e.g. Formspree).
     Until a real endpoint is configured (action contains "FORM_ID"), we
     intercept and show the confirmation locally so the site remains
     demonstrable. Replace the action URL to go live — see README.md. */
  document.querySelectorAll("form.form").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      var action = form.getAttribute("action") || "";
      if (action.indexOf("FORM_ID") !== -1 || action === "") {
        e.preventDefault();
        form.classList.add("is-sent");
      }
    });
  });
})();
