$(function(){
	$('.slider').slick({
       slidesToShow: 3,
       slidesToScroll: 1,
       dots: false,
       centerMode: true,
       focusOnSelect: true,
       arrows: true,
       responsive: [{
			breakpoint: 1200,
		    settings: {
		    	slidesToShow: 2,
		        slidesToScroll: 1,
		    }
		},{
			breakpoint: 830,
		    settings: {
		    	slidesToShow: 1,
		        slidesToScroll: 1,
		    }
		}]
    });

    $('.deals__slider').slick({
       slidesToShow: 3,
       slidesToScroll: 1,
       dots: false,
       centerMode: true,
       focusOnSelect: true,
       arrows: false,
       autoplay: true,
       autoplaySpeed: 2000,
       responsive: [{
			breakpoint: 960,
		    settings: {
		    	slidesToShow: 2,
		        slidesToScroll: 1,
		    }
		},{
			breakpoint: 690,
		    settings: {
		    	slidesToShow: 1,
		        slidesToScroll: 1,
		    }
		}]
    });

    $('.menu__btn').on('click', function(){
		$('.menu').toggleClass('menu--active')
	});


});

  function boom() {
    var name  = document.getElementById('name');
    var email = document.getElementById('email');
    var subject = document.getElementById('subject');
    var text = document.getElementById('text');
    var btn = document.getElementById('mail__form-btn');

    if (name.validity.valid & email.validity.valid & subject.validity.valid & text.validity.valid) {
    	alert('Ваше сообщение было отправлено!');
    }
  }
