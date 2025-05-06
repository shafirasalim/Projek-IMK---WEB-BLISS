document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("scrollToTop");

  // Fungsi untuk muncul/hilang tombol saat scroll
  window.addEventListener("scroll", function () {
    if (document.documentElement.scrollTop > 200) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  });

  // Fungsi untuk scroll ke atas
  button.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "auto" }); // kalau mau animasi, ganti "auto" jadi "smooth"
  });
});
