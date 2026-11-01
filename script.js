const enterBtn = document.getElementById("enterBtn");
const intro = document.getElementById("intro");
const invitation = document.getElementById("invitation");
enterBtn.addEventListener("click", () => {
  intro.classList.add("leaving");
  intro.style.transition = "opacity .7s ease";
  intro.style.opacity = "0";
  window.setTimeout(() => {
    intro.style.display = "none";
    invitation.classList.remove("hidden");
    window.scrollTo({top: 0, behavior: "instant"});
  }, 650);
});
