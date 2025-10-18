// Script interaktif sederhana
document.addEventListener("DOMContentLoaded", () => {
  const galleryImages = document.querySelectorAll(".gallery img");

  galleryImages.forEach(img => {
    img.addEventListener("click", () => {
      alert(`Kamu mengklik gambar: ${img.alt}`);
    });
  });
});
