window.onscroll = function () {
  let button = document.getElementById("scrollToTop");
  if (document.documentElement.scrollTop > 500) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
};
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "auto" }); // langsung tanpa animasi
}
