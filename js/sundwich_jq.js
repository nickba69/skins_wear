$(document).ready(function(){
  $('.gl-click').click(function() {// клик по класу
    	$(this).toggleClass('gl-sundwich--fx--on');
	$(".header__nav__menu").toggleClass('gl-sundwich--fx--on');
  });
    $('.gl-click--footer').click(function() {// клик по класу
    $(this).toggleClass('gl-sundwich--fx--on');
    $(".footer__nav__menu").toggleClass('gl-sundwich--fx--footer--on');
  });
});
