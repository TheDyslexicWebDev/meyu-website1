const gridContainer = document.querySelector("#grid_Container");

function bgChanger() {
  if (this.scrollY > this.innerHeight / 2) {
    // this. correspond to the window, if the window is less than the innerHeight, divise par half of the screen
    document.body.classList.add("bg-active");
  } else {
    document.body.classList.remove("bg-active");
  }
}

window.addEventListener("scroll", bgChanger);
