const slider = document.querySelector('.slider');
const imageBefore = document.querySelector('.image-before');
const sliderLine = document.querySelector('.slider-line');
const sliderButton = document.querySelector('.slider-button');

slider.addEventListener('input', (e) => {
  let percentage = e.target.value;
  imageBefore.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
  sliderLine.style.left = `${percentage}%`;
  sliderButton.style.left = `${percentage}%`;
});
