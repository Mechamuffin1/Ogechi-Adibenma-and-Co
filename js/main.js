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
     Forms submit to /api/contact (a Vercel serverless function) which
     emails the enquiry via Resend. A hidden honeypot field is added to
     each form to catch simple bots. */
  document.querySelectorAll("form.form").forEach(function (form) {
    var honeypot = document.createElement("input");
    honeypot.type = "text";
    honeypot.name = "company";
    honeypot.autocomplete = "off";
    honeypot.tabIndex = -1;
    honeypot.setAttribute("aria-hidden", "true");
    honeypot.style.cssText = "position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden;";
    form.appendChild(honeypot);

    var errorEl = document.createElement("p");
    errorEl.className = "form-error";
    errorEl.setAttribute("role", "alert");
    errorEl.textContent = "Something went wrong. Please try again, or email us directly.";
    var successEl = form.querySelector(".form-success");
    if (successEl) {
      successEl.insertAdjacentElement("afterend", errorEl);
    } else {
      form.appendChild(errorEl);
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (form.classList.contains("is-sending")) return;

      var data = {};
      new FormData(form).forEach(function (value, key) { data[key] = value; });
      data.page = window.location.pathname;

      var submitBtn = form.querySelector("button[type=submit]");
      form.classList.remove("has-error");
      form.classList.add("is-sending");
      if (submitBtn) submitBtn.disabled = true;

      fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then(function (res) {
          if (!res.ok) throw new Error("request-failed");
          form.classList.remove("is-sending");
          form.classList.add("is-sent");
        })
        .catch(function () {
          form.classList.remove("is-sending");
          form.classList.add("has-error");
          if (submitBtn) submitBtn.disabled = false;
        });
    });
  });
})();
