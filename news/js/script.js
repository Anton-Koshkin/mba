$(document).ready(function() { 
  $('.header__burger').click(function(_event) {
    $('.header__burger,.nav__links').toggleClass('active');
    $('body').toggleClass('lock');
  });
});