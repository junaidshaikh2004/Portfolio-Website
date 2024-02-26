// smooth scroll
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// Project slider
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
})

// first page animation
function firstPageAnim(){
  var tl = gsap.timeline();

   tl.from("#nav",{
    y:'-10',
    opacity:0,
    duration:1,
    ease:Expo.easeInOut  
  })
  
  tl.to(".box",{
    x:'-10',
    duration:1,
    ease:Expo.easeInOut, 
   })
   tl.to(".boundingelem",{
    y:'-10',
    duration:0.5,
    ease:Expo.easeInOut,
    stagger:.2
   })
};

firstPageAnim();

// project page animation

function projectAnim(){
  var tl = gsap.timeline();

  tl.to(".swip",
  {
    x:'-10',
    delay:4,
    duration:2,
    ease:Expo.easeInOut,
  })

}
projectAnim();

