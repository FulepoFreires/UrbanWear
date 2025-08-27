const voltarBtn = document.getElementById('voltar-btn');
const avancarBtn = document.getElementById('avancar-btn');
let currentSlide = 0;

function getActiveSlides() {
  if (window.innerWidth <= 699) {
    return document.querySelectorAll('.slider-pequena');
  } else {
    return document.querySelectorAll('.slider-grande');
  }
}

function showSlide(index) {
  const slides = getActiveSlides();
  slides.forEach((slide, i) => {
    slide.classList.toggle('on', i === index);
  });
}

function goToPrevSlide() {
  const slides = getActiveSlides();
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

function goToNextSlide() {
  const slides = getActiveSlides();
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

voltarBtn.addEventListener('click', goToPrevSlide);
avancarBtn.addEventListener('click', goToNextSlide);

let autoSlideInterval = setInterval(goToNextSlide, 3000);

function pauseAutoSlide() {
  clearInterval(autoSlideInterval);
}
function resumeAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(goToNextSlide, 3000);
}

window.addEventListener('resize', () => {
  currentSlide = 0;
  showSlide(currentSlide);
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(goToNextSlide, 3000);
});

// Pausa o auto-slide ao passar o mouse e volta ao tirar o mouse
const containerImg = document.querySelector('.container-img');
containerImg.addEventListener('mouseenter', pauseAutoSlide);
containerImg.addEventListener('mouseleave', resumeAutoSlide);
voltarBtn.addEventListener('mouseenter', pauseAutoSlide);
voltarBtn.addEventListener('mouseleave', resumeAutoSlide);
avancarBtn.addEventListener('mouseenter', pauseAutoSlide);
avancarBtn.addEventListener('mouseleave', resumeAutoSlide);

// Garante que o slide inicial seja exibido ao carregar
showSlide(currentSlide);