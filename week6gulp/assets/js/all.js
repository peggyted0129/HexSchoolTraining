"use strict";

console.log('Hello!'); // AOS 動畫

AOS.init({
  offset: 200,
  // offset (in px) from the original trigger point
  delay: 0,
  // values from 0 to 3000, with step 50ms
  duration: 1000 // values from 0 to 3000, with step 50ms

}); // AOS套件
// RWD navbar 首頁

$(document).ready(function () {
  console.log('HesSchool Hello!');
  $(".navbar-toggler").on('click', function () {
    $(".toggler-bar-top").toggleClass("toggler-bar-top-rotate");
    $(".toggler-bar-middle").toggleClass("d-none");
    $(".toggler-bar-bottom").toggleClass("toggler-bar-bottom-rotate");
  });
}); // fixed

$(document).ready(function () {
  $(".scroll-up").on('click', function () {
    $("html,body").animate({
      scrollTop: 0
    }, 2000);
  });
});
//# sourceMappingURL=all.js.map
