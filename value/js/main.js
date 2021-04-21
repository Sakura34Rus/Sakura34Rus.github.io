$(function(){
	$('.menu__btn').on('click', function(){
		$('.header-menu').toggleClass('header-menu--active')
	});
});

let _title = document.querySelector(".value__block-change__inner-title");
let _options = document.querySelector(".value__block-change__inner-options");
let _optionsList = document.querySelectorAll(".value__block-change__inner-options p");

_title.addEventListener("click", (e) => {
  _options.classList.toggle("isShow");
});

_optionsList.forEach((option) => {
  option.addEventListener("click", (e) => {
    _title.dataset.value = option.dataset.value;
    _title.innerHTML = option.innerHTML;
    _options.classList.remove("isShow");
  });
});




let _title1 = document.querySelector(".value__block-change__inner-title--1");
let _options1 = document.querySelector(".value__block-change__inner-options--1");
let _optionsList1 = document.querySelectorAll(".value__block-change__inner-options--1 p");

_title1.addEventListener("click", (e) => {
  _options1.classList.toggle("isShow");
});

_optionsList1.forEach((option) => {
  option.addEventListener("click", (e) => {
    _title1.dataset.value = option.dataset.value;
    _title1.innerHTML = option.innerHTML;
    _options1.classList.remove("isShow");
  });
});