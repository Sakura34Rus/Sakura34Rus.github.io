$(function(){
	$('.slider').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      arrows: true,
      prevArrow: '<button class="slick-btn slick-prev"><img src="images/right.svg" alt="prev"></button>',
      nextArrow: '<button class="slick-btn slick-next"><img src="images/right.svg" alt="next"></button>'
      // cssEase: 'linear'
    });

  $('.menu__btn').on('click', function(){
    $('.header__menu').toggleClass('header__menu--active')
  });
});
