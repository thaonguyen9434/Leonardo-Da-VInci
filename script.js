
//===================================================================================

$(window).scroll(function(){
    $(".main-contain").css("opacity", 1 - $(window).scrollTop() / 1200);
  });

//  $(window).scroll(function(){
//  scrollPosition = $(window).scrollTop();
//  scrollRatio = 1 - scrollPosition / 600;
//  $(".id1").css("opacity", scrollRatio);});
//





//$(window).scroll(function(){
//    var scrollVar = $(window).scrollTop();
//    $('.id1').css("opacity", 1 - scrollVar/300);
//})

//====================================================== SCROLL SLIDER ==========================================

const slider = document.querySelector('.slider-effect');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
});



//====================================================== SCROLL SLIDER HUMAN ==========================================


    
    
    

