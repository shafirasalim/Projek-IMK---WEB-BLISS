window.addEventListener("DOMContentLoaded", function () {
  const userName = sessionStorage.getItem("userLogin");
  const userNameElement = document.getElementById("user-name");
  const logoutElement = document.getElementById("logout");

  // Menampilkan nama pengguna jika ada di sessionStorage
  if (userName && userNameElement) {
    userNameElement.textContent = userName + " ⯆";

    // Event mouseenter → tampilkan logout
    userNameElement.addEventListener("mouseenter", function () {
      if (logoutElement) {
        logoutElement.style.display = "block";
      }
    });

    // Event mouseleave → sembunyikan logout
    userNameElement.addEventListener("mouseleave", function () {
      if (logoutElement) {
        logoutElement.style.display = "none";
      }
    });

    // Agar jika mouse keluar dari div logout, tombol ikut menghilang
    logoutElement.addEventListener("mouseleave", function () {
      logoutElement.style.display = "none";
    });
    logoutElement.addEventListener("mouseenter", function () {
      logoutElement.style.display = "block";
    });
  }
});

function logout() {
  sessionStorage.removeItem("userLogin");
  window.location.href = "/login.html";
}
