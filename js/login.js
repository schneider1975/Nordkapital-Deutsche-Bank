const form = document.getElementById("loginForm");

form.addEventListener("submit", function(e){

  e.preventDefault();

  const btn = document.querySelector(".login-btn");
  const btnText = document.getElementById("btnText");

  btn.style.opacity = "0.8";

  btnText.innerHTML = "Verbindung wird hergestellt...";

  setTimeout(() => {

    window.location.href = "dashboard.html";

  }, 2200);

});
