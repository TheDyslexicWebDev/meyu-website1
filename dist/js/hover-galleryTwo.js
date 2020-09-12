// ---------------------------
const slideshowTwo = document.querySelector(".slideshowTwo");
const imagesTwo = slideshowTwo.querySelectorAll("img");

slideshowTwo.addEventListener("mousemove", function (event) {
  const xAxe = event.offsetX;

  const widthTwo = this.offsetWidth;

  const percentageTwo = xAxe / widthTwo;

  const imageNumberTwo = Math.floor(percentageTwo * imagesTwo.length);

  imagesTwo.forEach((item) => {
    item.style.zIndex = 0;
  });

  imagesTwo[imageNumberTwo].style.zIndex = 1;
});

// [imageNumberTwo] with this you will specify the number of the image that will be seen,that s why each image has to have a number as a title
