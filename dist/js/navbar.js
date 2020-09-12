var preScrollPosition = window.pageYOffset;
//
window.onscroll = function () {
  var currentScrollPosition = window.pageYOffset;

  if (preScrollPosition > currentScrollPosition) {
    document.getElementById("header").style.top = "0";
    // .style.top = "0";  THIS WILL show the navbar until the bottom of it, like in the dropdown menu
  } else {
    document.getElementById("header").style.top = "-100px";
    // .style.top = "-100px";  THIS WILL HIDE the navbar on top, like in the dropdown menu
  }
  preScrollPosition = currentScrollPosition;
};
