
const carousel = document.querySelector('.Carousel');
const slides = carousel.querySelectorAll('li');
const prevButton = carousel.querySelector('.btn-directional-prev');
const nextButton = carousel.querySelector('.btn-directional-next');
const bullets = carousel.querySelectorAll('.nav-bullets button');

let currentIndex = 0;


function showSlide(index) {
  slides.forEach(slide => {
    slide.style.display = 'none';
  });
  slides[index].style.display = 'block';
}


function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}


function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}


nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);


bullets.forEach((bullet, i) => {
  bullet.addEventListener('click', () => {
    currentIndex = i;
    showSlide(currentIndex);
  });
});


showSlide(currentIndex);
