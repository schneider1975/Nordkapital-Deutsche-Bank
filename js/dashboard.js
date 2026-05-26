document.addEventListener("DOMContentLoaded", () => {

  // =========================
  // ULTRA SMOOTH BALANCE
  // =========================

  const balance =
    document.getElementById("balance");

  const target = 78000;

  let current = 0;

  const duration = 2200;

  const increment =
    target / (duration / 16);

  function animateBalance(){

    current += increment;

    if(current >= target){

      current = target;

    }

    balance.innerHTML =
      new Intl.NumberFormat(
        "de-DE",
        {
          style: "currency",
          currency: "EUR",
          minimumFractionDigits: 2
        }
      ).format(current);

    if(current < target){

      requestAnimationFrame(
        animateBalance
      );

    }

  }

  animateBalance();

  // =========================
  // MODAL SYSTEM
  // =========================

  const modal =
    document.getElementById("modal");

  const openBtn =
    document.getElementById("openModal");

  const closeBtn =
    document.getElementById("closeModal");

  openBtn.addEventListener("click", () => {

    modal.classList.add("show-modal");

  });

  closeBtn.addEventListener("click", () => {

    modal.classList.remove("show-modal");

  });

  window.addEventListener("click", (e) => {

    if(e.target === modal){

      modal.classList.remove(
        "show-modal"
      );

    }

  });

  // =========================
  // TRANSACTION ANIMATION
  // =========================

  const transactions =
    document.querySelectorAll(
      ".transaction"
    );

  transactions.forEach((item, index) => {

    item.style.opacity = "0";

    item.style.transform =
      "translateY(30px)";

    setTimeout(() => {

      item.style.transition =
        "0.6s ease";

      item.style.opacity = "1";

      item.style.transform =
        "translateY(0)";

    }, 300 + (index * 180));

  });

  // =========================
  // BUTTON EFFECT
  // =========================

  const unlockBtn =
    document.querySelector(
      ".unlock-btn"
    );

  unlockBtn.addEventListener(
    "click",
    () => {

      unlockBtn.innerHTML =
        "Anfrage wird verarbeitet...";

      unlockBtn.style.opacity =
        "0.8";

      setTimeout(() => {

        unlockBtn.innerHTML =
          "Freigabe beantragen";

        unlockBtn.style.opacity =
          "1";

      }, 2000);

    }
  );

  // =========================
  // SECURITY NOTIFICATION
  // =========================

  setTimeout(() => {

    const notification =
      document.createElement("div");

    notification.className =
      "notification";

    notification.innerHTML = `
      <strong>Sicherheitssystem</strong><br>
      Letzte sichere Anmeldung erkannt.
    `;

    document.body.appendChild(
      notification
    );

    setTimeout(() => {

      notification.classList.add(
        "show-notification"
      );

    }, 200);

    setTimeout(() => {

      notification.classList.remove(
        "show-notification"
      );

      setTimeout(() => {

        notification.remove();

      }, 500);

    }, 5000);

  }, 1500);

});
