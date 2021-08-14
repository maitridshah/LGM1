var images = [
  "https://user-images.githubusercontent.com/41771594/129085952-b2e22601-88fd-4455-8278-45d1e542567a.jpg",
  "https://user-images.githubusercontent.com/41771594/129086045-22bf254c-2074-4f74-9b0f-2f4a10e97c03.jpg",
  "https://user-images.githubusercontent.com/41771594/129086057-fddc1acf-1f83-4b37-bbc9-397fd98f5b3c.jpg",
  "https://user-images.githubusercontent.com/41771594/129086077-64d2e6a9-82f0-46d3-afb8-65a3ce5a0c82.jpg",
  "https://user-images.githubusercontent.com/41771594/129086096-32252761-d5d9-4777-9421-38ba2a2e81eb.jpg",
  "https://user-images.githubusercontent.com/41771594/129086110-dc8aba23-454f-45b9-bbae-96b5b861ce2c.jpg",
];
var i = 0;

function slides(){
  document.getElementById("slide").src = images[i];
  if(i < images.length - 1){
    i++;
  }
  else
    i = 0;
}
setInterval(slides,3000);



var images = [
  "https://user-images.githubusercontent.com/41771594/129083357-9a9fbd58-3727-417c-96ec-5d43dbc9e4fb.jpg",
  "https://user-images.githubusercontent.com/41771594/129083581-0e378e99-8713-4ece-afb6-a0f497cab23e.jpg",
  "https://user-images.githubusercontent.com/41771594/129083671-fd79f121-caca-4c38-a06c-8895c94895fa.jpg",
  "https://user-images.githubusercontent.com/41771594/129083685-26ed5cef-709b-403e-810c-b6625b8295e1.jpg",
  "https://user-images.githubusercontent.com/41771594/129083767-e4ae5af9-dea5-4b40-8bd5-c4791a333839.jpg",
  "https://user-images.githubusercontent.com/41771594/129083774-684b32a0-ffcb-45af-b610-67840f9408c1.jpg",
];
var i = 0;

function carousel(){
  document.getElementById("carousel").src = images[i];
  if(i < images.length - 1){
    i++;
  }
  else
    i = 0;
}
setInterval(carousel,4000);



var btn = $('#btn1');
$(document).ready(function(){
  $(window).scroll(function(){
    if ($(this).scrollTop()>100){
      $('.scroll-top').fadeIn();
    }
    else{
      $('.scroll-top').fadeOut();

    }
  });

$('.scroll-top').click(function(){
  $("html,body").animate({
    scrollTop: 0
  },100);
    return false;
  });
});