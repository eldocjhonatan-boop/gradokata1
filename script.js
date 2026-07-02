// Número de invitados dinámico (editable)
let numInvitados = 1; // Cambia este valor según el destinatario

// Elementos
const flap = document.getElementById("flap");
const seal = document.getElementById("seal");
const cards = document.getElementById("cards");
const cardInvitados = document.getElementById("cardInvitados");
const inviteBtn = document.getElementById("inviteBtn");

// Texto dinámico de invitados
cardInvitados.textContent = `Válido para ${numInvitados} persona${numInvitados > 1 ? "s" : ""}`;

// Animación apertura sobre
seal.addEventListener("click", () => {
  seal.style.transition = "transform 0.4s ease, opacity 0.8s ease";
  seal.style.transform = "scale(0.9)";

  setTimeout(() => {
    seal.style.opacity = "0";

    flap.style.transition = "transform 1.5s ease-in-out";
    flap.style.transformOrigin = "top center";
    flap.style.transform = "rotateX(-150deg)";

    setTimeout(() => {
      cards.classList.add("show");

      const allCards = document.querySelectorAll(".card");
      if (allCards[0]) allCards[0].style.transform = "rotate(-4deg)";
      if (allCards[1]) allCards[1].style.transform = "rotate(4deg)";
    }, 1500);
  }, 400);
});

// Hover tarjetas
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transition = "all 0.4s ease";
    card.style.transform += " translateY(-5px)";
    card.style.boxShadow = "0 10px 20px rgba(0,0,0,0.3)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = card.style.transform.replace(" translateY(-5px)", "");
    card.style.boxShadow = "0 6px 15px rgba(0,0,0,0.2)";
  });
});

// Acción final: abrir invitación oficial
inviteBtn.addEventListener("click", () => {

  cards.style.transition = "all 1s ease";
  cards.style.transform = "scale(1.05)";
  cards.style.opacity = "0";

  setTimeout(() => {
    window.location.href = "https://gradokatalinarojasmed.my.canva.site/gradokata";
  }, 1000);

});