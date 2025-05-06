window.addEventListener("DOMContentLoaded", function () {
  const userName = sessionStorage.getItem("userLogin");
  const userNameElement = document.getElementById("user-name");
  const logoutElement = document.getElementById("logout");

  if (userName && userNameElement) {
    userNameElement.textContent = userName + " ⯆";
    userNameElement.addEventListener("mouseenter", function () {
      if (logoutElement) {
        logoutElement.style.display = "block";
      }
    });
    userNameElement.addEventListener("mouseleave", function () {
      if (logoutElement) {
        logoutElement.style.display = "none";
      }
    });
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
