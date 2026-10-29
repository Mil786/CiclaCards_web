/* =====================================
   CICLACARDS - CARROSSEL
===================================== */

const track = document.getElementById("carouselTrack");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

/* Largura de um card + espaço entre cards */
function getStep() {
    const card = track.querySelector(".product-card");
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    return card.getBoundingClientRect().width + gap;
}

/* Ativa/desativa os botões conforme a posição */
function updateButtons() {
    const maxScroll = track.scrollWidth - track.clientWidth;
    prevBtn.disabled = track.scrollLeft <= 4;
    nextBtn.disabled = track.scrollLeft >= maxScroll - 4;
}

prevBtn.addEventListener("click", () => {
    track.scrollBy({ left: -getStep(), behavior: "smooth" });
});

nextBtn.addEventListener("click", () => {
    track.scrollBy({ left: getStep(), behavior: "smooth" });
});

/* Teclado: setas quando o carrossel está em foco */
track.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") nextBtn.click();
    if (e.key === "ArrowLeft") prevBtn.click();
});

track.addEventListener("scroll", updateButtons, { passive: true });
window.addEventListener("resize", updateButtons);

/* Ano automático no rodapé */
document.getElementById("year").textContent = new Date().getFullYear();

updateButtons();
