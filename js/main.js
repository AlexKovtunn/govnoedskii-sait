$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    dots: false,
    loop: true,
    responsive : {
    // breakpoint from 0 up
    0 : {
        items: 2,
        margin: 32,
    },
    // breakpoint from 480 up
    601 : {
        items: 3,
        margin: 32,
    },
    // breakpoint from 768 up
    1001: {
        items: 3,
        margin: 150,
    }
    }
  });
});


//video

const videoBtn = document.querySelector('#video-btn');
const videoPic = document.querySelector('.video__pic');
const videoWrapper = document.querySelector('.video');
const video = document.querySelector('#video-file');


videoBtn.addEventListener('click', function() {
  videoPic.classList.add('hidden');
  videoWrapper.classList.remove('video-overlay');
  videoBtn.classList.add('none');

  if (video.paused) {
    video.play()
  }
})


video.addEventListener('click', function (){
  if (video.paused) {
    video.play()
  } else {
    videoWrapper.classList.add('video-overlay');
    videoBtn.classList.remove('none');
    video.pause();
  }
})


//mobile nav

const openNavbtn = document.querySelector('#openMobileNav');
const mobileNav = document.querySelector('#mobileNav');
const closeNavbtn = document.querySelector('#closeMobileNav');

openNavbtn.onclick = function () {
  mobileNav.classList.remove('none');
  document.body.classList.add('no-scroll');
}

closeNavbtn.onclick = function () {
  mobileNav.classList.add('none');
  document.body.classList.remove('no-scroll');
}
