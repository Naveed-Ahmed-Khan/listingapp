import $ from "jquery";

export const stickyHeader = () => {
  $(window).on(function () {
    var sticky = $(".sticky-wrapper"),
      scroll = $(window).scrollTop();
    if (scroll >= 100) sticky.addClass("is-sticky");
    else sticky.removeClass("is-sticky");
  });
};
