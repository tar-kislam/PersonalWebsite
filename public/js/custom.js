$(document).ready(function () {
  $(".list").click(function () {
    $(".list").removeClass("active"), $(this).addClass("active");
  });
  const t = document.querySelectorAll(".list");
  function e() {
    t.forEach((t) => t.classList.remove("active")),
      this.classList.add("active");
  }
  t.forEach((t) => t.addEventListener("click", e));
  const i = document.querySelector(".nav").querySelectorAll("li"),
    o = i.length,
    s = document.querySelectorAll(".section"),
    c = s.length;
  for (let t = 0; t < o; t++) {
    i[t].querySelector("a").addEventListener("click", function () {
      n();
      for (let t = 0; t < o; t++)
        i[t].querySelector("a").classList.contains("active") && a(t),
          i[t].classList.contains("active") && a(t),
          i[t].querySelector("a").classList.remove("active"),
          i[t].classList.remove("active");
      this.classList.add("active"), r(this);
    });
  }
  function n() {
    for (let t = 0; t < c; t++) s[t].classList.remove("back-section");
  }
  function a(t) {
    s[t].classList.add("back-section");
  }
  function r(t) {
    for (let t = 0; t < c; t++) s[t].classList.remove("active");
    const e = t.getAttribute("href").split("#")[1];
    document.querySelector("#" + e).classList.add("active");
  }
  function l(t) {
    for (let e = 0; e < o; e++) {
      i[e].querySelector("a").classList.remove("active"),
        i[e].classList.remove("active");
      const o = t.getAttribute("href").split("#")[1];
      o === i[e].querySelector("a").getAttribute("href").split("#")[1] &&
        i[e].querySelector("a").classList.add("active"),
        o === i[e].querySelector("a").getAttribute("href").split("#")[1] &&
          i[e].classList.add("active");
    }
  }
  if (
    (document.querySelector(".hire-me").addEventListener("click", function () {
      const t = this.getAttribute("data-section-index");
      r(this), l(this), n(), a(t);
    }),
    document.querySelector(".about-us").addEventListener("click", function () {
      const t = this.getAttribute("data-section-index");
      r(this), l(this), n(), a(t);
    }),
    jQuery(".mouse-cursor").length && $("body"))
  ) {
    const t = document.querySelector(".cursor-inner"),
      e = document.querySelector(".cursor-outer");
    let i,
      o = 0,
      s = !1;
    (window.onmousemove = function (c) {
      s ||
        (e.style.transform =
          "translate(" + c.clientX + "px, " + c.clientY + "px)"),
        (t.style.transform =
          "translate(" + c.clientX + "px, " + c.clientY + "px)"),
        (i = c.clientY),
        (o = c.clientX);
    }),
      $("body").on("mouseenter", "a,.trigger, .cursor-pointer", function () {
        t.classList.add("cursor-hover"), e.classList.add("cursor-hover");
      }),
      $("body").on("mouseleave", "a,.trigger, .cursor-pointer", function () {
        ($(this).is("a") && $(this).closest(".cursor-pointer").length) ||
          (t.classList.remove("cursor-hover"),
          e.classList.remove("cursor-hover"));
      }),
      (t.style.visibility = "visible"),
      (e.style.visibility = "visible");
  }
  $("#testimonial").owlCarousel({
    loop: !0,
    margin: 20,
    dots: !0,
    nav: !1,
    autoplay: !0,
    autoplayTimeout: 5e3,
    autoplayHoverPause: !0,
    responsive: { 0: { items: 1 }, 600: { items: 2 }, 1000: { items: 3 } },
  });
});


/* document.getElementsByClassName("clickbtn").addEventListener("click", downloadCV);
function downloadCV() {
  window.open("../public/resume/tarik-resume.pdf", "_blank");
} */


if(screen.width < 768) {
  var element = document.getElementById("wpId");
  element.parentNode.removeChild(element)
} 