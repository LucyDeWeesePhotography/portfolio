document.addEventListener('DOMContentLoaded', () => {

    // --- 1. LIGHTBOX CONTROLS ---
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const closeButton = document.querySelector(".close-lightbox");
    const galleryImages = document.querySelectorAll(".gallery-grid img");

    if (lightbox && lightboxImage && closeButton) {
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
    }

    // --- 2. IMAGE REVEAL CONTROLLER ---
    galleryImages.forEach(img => {
        // If the image is already cached by the browser, reveal immediately
        if (img.complete) {
            img.classList.add('is-loaded');
        } else {
            // Reveal smoothly once download completes
            img.addEventListener('load', () => {
                img.classList.add('is-loaded');
            });

            // Fallback for network glitches
            img.addEventListener('error', () => {
                img.classList.add('is-loaded');
            });
        }
    });

});