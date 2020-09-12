const slideshow = document.querySelector(".slideshow");

const images = slideshow.querySelectorAll("img");

slideshow.addEventListener("mousemove", function (event) {
  const x = event.offsetX;

  const width = this.offsetWidth;

  const percentage = x / width; // x of the page dividido por el width

  const imageNumber = Math.floor(percentage * images.length);

  images.forEach((image) => {
    image.style.zIndex = 0;
  });

  images[imageNumber].style.zIndex = -2;
});
