document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("scrollToTop");
  window.addEventListener("scroll", function () {
    if (document.documentElement.scrollTop > 200) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  });

  button.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "auto" });
  });
});
