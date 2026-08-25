/* Vanilla runtime for the single-file AI WOWO preview.
   Re-implements the React page's interactions against the same DOM contracts:
   tab switching (savings + benchmark), FAQ accordion, carousels, fixed header,
   toast dismiss, mobile menu, copy buttons, contact form, canvas dither. */
(function () {
  "use strict";

  /* ---------- generic tab system (aria-selected / aria-hidden driven) ---- */
  function initTabs(section, opts) {
    if (!section) return;
    var tabs = Array.prototype.slice.call(section.querySelectorAll('[role="tab"]'));
    var panels = Array.prototype.slice.call(section.querySelectorAll('[role="tabpanel"]'));
    if (tabs.length < 2 || panels.length < 2) return;

    var activeBtnClass = null, inactiveBtnClass = null;
    var activePanelClass = null, inactivePanelClass = null;
    var progressHTML = null;
    tabs.forEach(function (t) {
      var sel = t.getAttribute("aria-selected") === "true";
      var progress = t.querySelector('[class*="tab-progress"]');
      if (progress) progressHTML = progress.outerHTML;
      var cls = t.className;
      if (progress) {
        /* class string is independent of the progress child */
      }
      if (sel && activeBtnClass === null) activeBtnClass = cls;
      if (!sel && inactiveBtnClass === null) inactiveBtnClass = cls;
    });
    panels.forEach(function (p) {
      var hidden = p.getAttribute("aria-hidden") === "true";
      if (!hidden && activePanelClass === null) activePanelClass = p.className;
      if (hidden && inactivePanelClass === null) inactivePanelClass = p.className;
    });
    if (activeBtnClass === null || inactiveBtnClass === null) return;

    var current = tabs.findIndex(function (t) { return t.getAttribute("aria-selected") === "true"; });
    if (current < 0) current = 0;
    var timer = null;

    function activate(index) {
      current = index;
      tabs.forEach(function (t, i) {
        t.className = i === index ? activeBtnClass : inactiveBtnClass;
        t.setAttribute("aria-selected", i === index ? "true" : "false");
        t.setAttribute("tabindex", i === index ? "0" : "-1");
        var old = t.querySelector('[class*="tab-progress"]');
        if (old) old.remove();
        if (i === index && progressHTML) {
          t.insertAdjacentHTML("beforeend", progressHTML);
        }
      });
      panels.forEach(function (p, i) {
        if (activePanelClass && inactivePanelClass) {
          p.className = i === index ? activePanelClass : inactivePanelClass;
        }
        p.setAttribute("aria-hidden", i === index ? "false" : "true");
      });
    }

    function arm() {
      if (timer) clearInterval(timer);
      if (!opts.auto) return;
      timer = setInterval(function () {
        if (document.hidden) return;
        activate((current + 1) % tabs.length);
      }, opts.auto);
    }

    tabs.forEach(function (t, i) {
      t.addEventListener("click", function () {
        activate(i);
        if (opts.stopOnClick) {
          if (timer) clearInterval(timer);
          timer = null;
          var bar = t.querySelector('[class*="tab-progress"]');
          if (bar) bar.remove();
        } else {
          arm();
        }
      });
    });
    arm();
  }

  initTabs(document.getElementById("savings"), { auto: 5000, stopOnClick: true });
  initTabs(document.getElementById("benchmark"), { auto: 5000, stopOnClick: false });

  /* ---------- FAQ accordion (single-open, data-state driven) -------------- */
  var faq = document.getElementById("faq");
  if (faq) {
    var items = Array.prototype.slice.call(faq.querySelectorAll("div[data-state]")).filter(function (el) {
      return el.querySelector("button[aria-expanded]");
    });
    function setState(item, open) {
      var state = open ? "open" : "closed";
      item.setAttribute("data-state", state);
      item.querySelectorAll("[data-state]").forEach(function (el) {
        el.setAttribute("data-state", state);
      });
      var btn = item.querySelector("button[aria-expanded]");
      if (btn) btn.setAttribute("aria-expanded", open ? "true" : "false");
    }
    items.forEach(function (item) {
      var btn = item.querySelector("button[aria-expanded]");
      if (!btn) return;
      btn.addEventListener("click", function () {
        var isOpen = item.getAttribute("data-state") === "open";
        items.forEach(function (other) { setState(other, false); });
        if (!isOpen) setState(item, true);
      });
    });
  }

  /* ---------- carousels (snap scrollers with prev/next buttons) ----------- */
  function initCarousel(prevLabel, nextLabel) {
    var prev = document.querySelector('button[aria-label="' + prevLabel + '"]');
    var next = document.querySelector('button[aria-label="' + nextLabel + '"]');
    if (!prev || !next) return;
    var wrap = prev.closest("section") || prev.parentElement;
    var scroller = null;
    var node = prev;
    while (node && node !== document.body && !scroller) {
      scroller = node.querySelector('[class*="overflow-x-auto"]');
      node = node.parentElement;
    }
    if (!scroller) return;
    function step() {
      var card = scroller.children[0];
      var gap = 20;
      return card ? card.getBoundingClientRect().width + gap : scroller.clientWidth;
    }
    function update() {
      var max = scroller.scrollWidth - scroller.clientWidth - 4;
      prev.disabled = scroller.scrollLeft <= 4;
      next.disabled = scroller.scrollLeft >= max;
    }
    prev.addEventListener("click", function () { scroller.scrollBy({ left: -step(), behavior: "smooth" }); });
    next.addEventListener("click", function () { scroller.scrollBy({ left: step(), behavior: "smooth" }); });
    scroller.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
  }
  initCarousel("上一阶段", "下一阶段");
  initCarousel("上一组活动", "下一组活动");

  /* ---------- fixed header show/hide -------------------------------------- */
  var header = document.querySelector("div.fixed.inset-x-0.top-0");
  if (header) {
    var shown = null;
    function syncHeader() {
      var want = window.scrollY > 100;
      if (want === shown) return;
      shown = want;
      if (want) {
        header.classList.remove("-translate-y-full", "opacity-0");
        header.classList.add("translate-y-0", "opacity-100");
        header.removeAttribute("inert");
      } else {
        header.classList.add("-translate-y-full", "opacity-0");
        header.classList.remove("translate-y-0", "opacity-100");
        header.setAttribute("inert", "");
      }
    }
    window.addEventListener("scroll", syncHeader, { passive: true });
    syncHeader();
  }

  /* ---------- offer toast dismiss ------------------------------------------ */
  var toastClose = document.querySelector('button[aria-label="关闭政策提示"]');
  if (toastClose) {
    toastClose.addEventListener("click", function () {
      var aside = toastClose.closest("aside");
      if (aside) aside.remove();
    });
  }

  /* ---------- mobile hamburger menu ---------------------------------------- */
  var menuBtns = document.querySelectorAll('button[aria-label="打开菜单"]');
  var mobileMenu = Array.prototype.slice.call(document.querySelectorAll("div.fixed")).find(function (el) {
    return /bottom-0/.test(el.className) && /lg:hidden/.test(el.className) && el.querySelector("a");
  });
  if (mobileMenu && menuBtns.length) {
    var open = false;
    function syncMenu() {
      if (open) {
        mobileMenu.classList.remove("invisible", "-translate-y-2", "opacity-0");
        mobileMenu.classList.add("visible", "translate-y-0", "opacity-100");
      } else {
        mobileMenu.classList.add("invisible", "-translate-y-2", "opacity-0");
        mobileMenu.classList.remove("visible", "translate-y-0", "opacity-100");
      }
      mobileMenu.setAttribute("aria-hidden", open ? "false" : "true");
      menuBtns.forEach(function (b) { b.setAttribute("aria-expanded", open ? "true" : "false"); });
    }
    menuBtns.forEach(function (b) {
      b.addEventListener("click", function () { open = !open; syncMenu(); });
    });
    mobileMenu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { open = false; syncMenu(); });
    });
    syncMenu();
  }

  /* ---------- copy buttons -------------------------------------------------- */
  var copyBtn = document.querySelector('button[aria-label^="复制联系邮箱"]');
  if (copyBtn) {
    copyBtn.addEventListener("click", function () {
      var label = copyBtn.getAttribute("aria-label") || "";
      var email = (label.split("：")[1] || "AIWOWO@agent.qq.com").trim();
      if (navigator.clipboard) navigator.clipboard.writeText(email);
      var live = copyBtn.closest("div") && copyBtn.closest("div").parentElement
        ? copyBtn.closest("section").querySelector("[aria-live]")
        : null;
      if (live) live.textContent = "已复制到剪贴板";
    });
  }
  document.querySelectorAll("button").forEach(function (b) {
    if (b.textContent.trim() === "复制链接") {
      b.addEventListener("click", function () {
        if (navigator.clipboard) navigator.clipboard.writeText(window.location.href.split("#")[0] + "#benchmark");
        var live = b.closest("div") ? b.closest("div").querySelector("[aria-live]") : null;
        if (live) live.textContent = "链接已复制";
      });
    }
  });

  /* ---------- contact form (frontend-only success state) -------------------- */
  document.querySelectorAll("#contact form").forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var live = form.querySelector("[aria-live]");
      if (live) live.textContent = "✓ 提交成功！我们会尽快与您联系。";
    });
  });

  /* ---------- cost-chart canvas dither (Bayer 4x4, two tones) -------------- */
  var BAYER = [
    [0, 8, 2, 10],
    [12, 4, 14, 6],
    [3, 11, 1, 9],
    [15, 7, 13, 5],
  ];
  document.querySelectorAll("canvas.router-as-bar-dither-canvas").forEach(function (canvas) {
    var ctx = canvas.getContext("2d");
    if (!ctx) return;
    var w = canvas.width, hgt = canvas.height;
    var stack = canvas.parentElement;
    var flexSeg = stack ? stack.querySelector(".router-as-bar-segment--flex") : null;
    var flexPct = flexSeg ? parseFloat(flexSeg.style.height) || 0 : 0;
    var flexRows = Math.round((flexPct / 100) * hgt);
    ctx.clearRect(0, 0, w, hgt);
    for (var y = 0; y < hgt; y++) {
      for (var x = 0; x < w; x++) {
        var t = BAYER[y % 4][x % 4] / 16;
        if (y < flexRows) {
          if (t < 0.35) {
            ctx.fillStyle = "rgba(243,240,234,0.6)";
            ctx.fillRect(x, y, 1, 1);
          }
        } else if (t >= 0.8) {
          ctx.fillStyle = "rgba(13,14,13,0.5)";
          ctx.fillRect(x, y, 1, 1);
        }
      }
    }
  });

  /* ---------- ensure the CLI typing scene runs ------------------------------ */
  document.querySelectorAll(".rmah-cr--pending").forEach(function (el) {
    el.classList.remove("rmah-cr--pending");
    el.classList.add("rmah-cr--animated");
  });
})();
