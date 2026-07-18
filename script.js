// Unique Arts 247 Gallery

document.addEventListener("DOMContentLoaded", function () {

    // Smooth scrolling for navigation links
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", function (e) {
            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Simple gallery image loading effect
    const images = document.querySelectorAll(".gallery img");

    images.forEach(image => {
        image.addEventListener("load", function () {
            this.style.opacity = "1";
        });
    });

});
