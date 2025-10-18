document.addEventListener("DOMContentLoaded", () => {
  console.log("CV Frizi berhasil dimuat.");
  
  const sections = document.querySelectorAll("section");
  sections.forEach(sec => {
    sec.addEventListener("mouseenter", () => {
      sec.style.background = "#f9f9f9";
      sec.style.transition = "0.3s";
    });
    sec.addEventListener("mouseleave", () => {
      sec.style.background = "transparent";
    });
  });
});