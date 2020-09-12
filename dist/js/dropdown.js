function init() {
  const hamburger = document.querySelector(".menu");
  const hambgerlines = document.querySelectorAll(".menu line");
  const navOpen = document.querySelector(".nav-open");
  const imgNavOpen = document.querySelector(".img-navOpen");

  const linkOneNav = document.querySelector(".linkOne-Nav");
  const linkTwoNav = document.querySelector(".linkTwo-Nav");
  const linkThreeNav = document.querySelector(".linkThree-Nav");
  const logo = document.querySelector(".logo a");

  const tl = new TimelineMax({ paused: true, reversed: true });

  tl.to(navOpen, 0.8, { y: 0 })
    .fromTo(
      imgNavOpen,
      0.4,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0 },
      "-=0.1"
    )

    //
    .fromTo(logo, 0.2, { color: "#000" }, { color: "#ddd" }, "-=1")
    .fromTo(
      linkOneNav,
      0.4,
      { opacity: 0, x: 10 },
      { opacity: 1, x: 0 },
      "-=0.1"
    )
    .fromTo(
      linkTwoNav,
      0.6,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0 },
      "-=0.1"
    )
    .fromTo(
      linkThreeNav,
      0.4,
      { opacity: 0, x: 10 },
      { opacity: 1, x: 0 },
      "-=0.1"
    )
    .fromTo(hambgerlines, 0.2, { stroke: "#000" }, { stroke: "#ddd" }, "-=1");

  hamburger.addEventListener("click", () => {
    tl.reversed() ? tl.play() : tl.reverse();
  });
}
init();
