'use strict'
$(function () {
  $('.nav__burger').on('click', function (){
    $('.nav__list').toggleClass('nav__list--active');
    $('.nav__burger').toggleClass('nav__burger--active');
  });
})