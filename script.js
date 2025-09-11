// ───── Smooth Scroll for Nav Links ─────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// ───── Hero Typing Effect ─────
const text = "Hi, I am SAI RESHMA KAKARLA";
let i = 0;
function typingEffect() {
  if (i < text.length) {
    document.querySelector(".hero-content-center h1").innerHTML =
      text.substring(0, i + 1);
    i++;
    setTimeout(typingEffect, 100);
  }
}
typingEffect();

// ───── Back-to-Top Button ─────
const topBtn = document.createElement("button");
topBtn.innerText = "↑";
topBtn.classList.add("back-to-top");
document.body.appendChild(topBtn);

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});
