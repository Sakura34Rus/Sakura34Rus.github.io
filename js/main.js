$(function(){
	$('.slider').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: false,
		dots: true,
		responsive: [{
			breakpoint: 1110,
		    settings: {
		    	slidesToShow: 3,
		        slidesToScroll: 3,
		    }
		},{
			breakpoint: 770,
		    settings: {
		    	slidesToShow: 2,
		        slidesToScroll: 2,
		    }
		},{
			breakpoint: 530,
		    settings: {
		    	slidesToShow: 1,
		        slidesToScroll: 1,
		    }
		}]
	});
	$('.menu__btn').on('click', function(){
		$('.menu__list').toggleClass('menu__list--active')
	});
});