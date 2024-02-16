const nav = document.getElementsById("banniere");
window.onscroll = function () {
  if (document.body.scrollTop >= 200) {
    banniere.classList.add("nav-colored");
    banniere.classList.remove("nav-transparent");
  } else {
    banniere.classList.add("nav-transparent");
    banniere.classList.remove("nav-colored");
  }
};
