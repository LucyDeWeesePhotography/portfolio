document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("dynamicModal");
    const modalGrid = document.getElementById("modalPhotoGrid");
    const modalTitle = document.getElementById("modalAlbumTitle");
    const closeBtn = document.querySelector(".modal-close-btn");

    // Dynamic inner photo database mapping
    const albumCollections = {
        "ferraz-01.jpg": { 
            title: "The Ferraz Family Session", 
            images: ["ferraz-01.jpg", "lowe-06.jpg", "bolden-07.jpg"] 
        },
        "jack-02.jpg": { 
            title: "The Jack Family Collection", 
            images: ["jack-02.jpg", "boyd-08.jpg"] 
        },
        "fernades-03.jpg": { 
            title: "The Fernandes Story", 
            images: ["fernades-03.jpg", "matthews-09.jpg", "coates-10.jpg"] 
        }
    };

    // Click handler for gallery photos
    document.querySelectorAll(".session-trigger").forEach(img => {
        img.addEventListener("click", (e) => {
            const path = e.target.getAttribute("src");
            const filename = path.substring(path.lastIndexOf("/") + 1);
            
            // Flush old layout structures
            modalGrid.innerHTML = "";

            // Lookup existing details or default gracefully
            const session = albumCollections[filename] || {
                title: "Family Session Archive",
                images: [path, path, path]
            };

            modalTitle.textContent = session.title;

            // Generate inner album photos loop
            session.images.forEach(srcString => {
                const innerImg = document.createElement("img");
                innerImg.src = srcString.includes("/") ? srcString : `./images/${srcString}`;
                innerImg.alt = "Collection item showcase snapshot";
                modalGrid.appendChild(innerImg);
            });

            // Make viewport container visible
            modal.style.display = "block";
            document.body.style.overflow = "hidden"; // Block page content scroll
        });
    });

    // Close Modal Event Listeners
    closeBtn.addEventListener("click", closeModalWindow);
    modal.addEventListener("click", (e) => {
        if (e.target === modal) closeModalWindow();
    });

    function closeModalWindow() {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
});