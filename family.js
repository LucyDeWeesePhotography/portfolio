const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeButton = document.querySelector(".close-lightbox");
const galleryImages = document.querySelectorAll(".gallery-grid img");

// Open lightbox
galleryImages.forEach(image => {
  image.addEventListener("click", () => {
    lightbox.classList.add("active");
    lightboxImage.src = image.src;
  });
});

// Close lightbox via button
closeButton.addEventListener("click", () => {
  lightbox.classList.remove("active");
});

// Close lightbox via clicking the background
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove("active");
  }
});

// Close lightbox via Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && lightbox.classList.contains("active")) {
    lightbox.classList.remove("active");
  }
});