jQuery(document).ready(function (s) {
  s("#preset1").click(function () {
    return (
      s("#style-switch").attr("href", "../../public/css/colors/orange.css"), !1
    );
  }),
    s("#preset2").click(function () {
      return (
        s("#style-switch").attr("href", "../../public/css/colors/purple.css"),
        !1
      );
    }),
    s("#preset3").click(function () {
      return (
        s("#style-switch").attr("href", "../../public/css/colors/red.css"), !1
      );
    }),
    s("#preset4").click(function () {
      return (
        s("#style-switch").attr("href", "../../public/css/colors/violet.css"),
        !1
      );
    }),
    s("#preset5").click(function () {
      return (
        s("#style-switch").attr("href", "../../public/css/colors/blue.css"), !1
      );
    }),
    s("#preset6").click(function () {
      return (
        s("#style-switch").attr("href", "../../public/css/colors/golden.css"),
        !1
      );
    }),
    s("#preset7").click(function () {
      return (
        s("#style-switch").attr("href", "../../public/css/colors/magenta.css"),
        !1
      );
    }),
    s("#preset8").click(function () {
      return (
        s("#style-switch").attr(
          "href",
          "../../public/css/colors/yellowgreen.css"
        ),
        !1
      );
    }),
    s("#preset9").click(function () {
      return (
        s("#style-switch").attr("href", "../../public/css/colors/green.css"), !1
      );
    }),
    s("#preset10").click(function () {
      return (
        s("#style-switch").attr("href", "../../public/css/colors/yellow.css"),
        !1
      );
    });
}),
  $(document).ready(function () {
    $(".style-switch-button").click(function () {
      $(".style-switch-wrapper").toggleClass("active");
    }),
      $("a.close-styler").click(function () {
        $(".style-switch-wrapper").removeClass("active");
      });
  });
