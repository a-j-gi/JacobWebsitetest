//bg timez--------------------------------------
var currentHour = new Date().getHours();

var container = document.querySelector('.container');

var morningImage = 'url(morning.gif)';
var afternoonImage = 'url(afternoon.gif)';
var eveningImage = 'url(evening.gif)';

if (currentHour >= 6 && currentHour < 12) { // 6:00AM - 11:59AM
    container.style.backgroundImage = morningImage;
} else if (currentHour >= 12 && currentHour < 18) { // 12:00 PM - 5:59 PM
    container.style.backgroundImage = afternoonImage;
} else { // 6:00 PM - 5:59 AM
    container.style.backgroundImage = eveningImage;
}

container.style.backgroundSize = 'cover';
container.style.backgroundRepeat = 'no-repeat';
container.style.backgroundPosition = 'center';
//--------------------------------------------

//images

const carousels = document.querySelectorAll('.carousel');

carousels.forEach(carousel => {
  const slides = carousel.querySelectorAll('img');
  let currentSlide = 0;
  let autoScrollInterval;

  function showSlide(n) {
    slides.forEach(slide => {
      slide.style.display = 'none';
    });
    slides[n].style.display = 'block';
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  function autoScroll() {
    autoScrollInterval = setInterval(() => {
      nextSlide();
    }, 5000); 
  }

  showSlide(currentSlide);
  autoScroll();

  carousel.addEventListener('mouseenter', () => {
    clearInterval(autoScrollInterval);
  });

  carousel.addEventListener('mouseleave', () => {
    autoScroll();
  });

  const prevButton = carousel.querySelector('.prev');
  const nextButton = carousel.querySelector('.next');

  prevButton.addEventListener('click', () => {
    prevSlide();
    clearInterval(autoScrollInterval);
  });

  nextButton.addEventListener('click', () => {
    nextSlide();
    clearInterval(autoScrollInterval);
  });
});

//--------------------------------------------------

var marqueeText = document.getElementById('marqueeText');

function handleScroll(event) {
    if (event.deltaY > 0) {
        marqueeText.scrollTop += 10; 
    } else {
    }
}

marqueeText.addEventListener('wheel', handleScroll);

function enableScroll(infoTextId) {
  var infoText = document.getElementById(infoTextId);
  infoText.classList.add('info-text-scrolling');
}

function disableScroll(infoTextId) {
  var infoText = document.getElementById(infoTextId);
  infoText.classList.remove('info-text-scrolling');
}

//-------------------------------------------------------------


function playJumpscare() {
  var overlay = document.getElementById('jumpscare-overlay');
  var gif = document.getElementById('jumpscare-gif');
  var audio = document.getElementById('jumpscare-audio'); 

  overlay.style.display = 'block'; 
  gif.style.display = 'block'; 
  audio.play(); 

  setTimeout(function() {
      overlay.style.display = 'none'; 
      gif.style.display = 'none'; 
  }, 555); 
}

