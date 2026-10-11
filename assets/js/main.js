/* R26-IT-155 project website — nav active state and mobile menu toggle.
   No dependencies. Pages work without this file: the active link is also
   marked in the HTML, and the nav stays visible when scripts are off. */
(function () {
  "use strict";

  var root = document.documentElement;
  root.classList.remove("no-js");
  root.classList.add("js");

  // Active state: match the current file name ("/" counts as index.html).
  function currentPage() {
    var file = window.location.pathname.split("/").pop();
    return file === "" ? "index.html" : file.toLowerCase();
  }

  function markActiveLink(nav) {
    var page = currentPage();
    var links = nav.querySelectorAll("a[href]");
    for (var i = 0; i < links.length; i++) {
      var target = links[i].getAttribute("href").split(/[?#]/)[0].toLowerCase();
      if (target === page) {
        links[i].setAttribute("aria-current", "page");
      } else {
        links[i].removeAttribute("aria-current");
      }
    }
  }

  function initMenu(toggle, nav) {
    function setOpen(open) {
      toggle.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("is-open", open);
    }

    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    // Escape closes the menu and returns focus to the toggle.
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setOpen(false);
        toggle.focus();
      }
    });

    // Reset when the viewport grows past the breakpoint.
    var wide = window.matchMedia("(min-width: 720px)");
    function onChange(mq) { if (mq.matches) setOpen(false); }
    if (wide.addEventListener) {
      wide.addEventListener("change", onChange);
    } else if (wide.addListener) {
      wide.addListener(onChange);
    }
  }

  function init() {
    var nav = document.getElementById("site-nav");
    if (!nav) return;
    markActiveLink(nav);

    var toggle = document.querySelector(".nav-toggle");
    if (toggle) initMenu(toggle, nav);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
