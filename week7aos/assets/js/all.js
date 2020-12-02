"use strict";

console.log('Hello!');
AOS.init({
  offset: 200,
  // offset (in px) from the original trigger point
  delay: 0,
  // values from 0 to 3000, with step 50ms
  duration: 1000 // values from 0 to 3000, with step 50ms

}); // AOS套件

$(document).ready(function () {
  console.log('HesSchool Hello!');
  $(".navbar-toggler").on('click'(function () {
    $(".navbar-toggler").toggleClass("open");
  }));
});

window.onresize = function () {
  document.querySelector('.banner').style.height = window.innerHeight - 74 + 'px';
};
//# sourceMappingURL=all.js.map
