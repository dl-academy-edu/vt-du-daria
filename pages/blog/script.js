var colorTitle = document.querySelector(".footer__success-list_js");
var addColor = document.querySelector(".footer__success-title_js");
var delColor = document.querySelector(".footer__success-title_js");

delColor.classList.remove("footer__success-title_hover");

colorTitle.addEventListener("mouseover", function(){
  addColor.classList.add("footer__success-title_hover");
});

colorTitle.addEventListener("mouseout", function(){
  delColor.classList.remove("footer__success-title_hover");
});