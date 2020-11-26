"use strict";

console.log('Hello!');
$(document).ready(function () {
  console.log('HesSchool Hello!');
  $('.dropdown').click(function (e) {
    e.preventDefault();
    $('.dropdown-icon').toggleClass('rotate');
    $('.dropdown-btn').slideToggle();
  });
  $('.header-nav-dropdown').click(function (e) {
    e.preventDefault();
    $('.header-nav-icon').toggleClass('rotate');
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
