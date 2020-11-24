"use strict";

console.log('Hello!');
$(document).ready(function () {
  console.log('HesSchool Hello!');
  $('.dropdown').click(function (e) {
    e.preventDefault();
    $('.dropdown-icon').toggleClass('rotate');
    $('.dropdown-btn').slideToggle();
  });
  $('.appear').click(function (e) {
    e.preventDefault();
    $('.reply').toggleClass('active');
  });
  $('.miss').click(function (e) {
    e.preventDefault();
    $('.reply').toggleClass('active');
  });
});
//# sourceMappingURL=all.js.map
