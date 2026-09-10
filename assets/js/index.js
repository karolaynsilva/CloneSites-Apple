document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector("#navbar");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 20) {
            navbar.style.backgroundColor = "rgba(255, 255, 255, 0.92)";
            navbar.style.boxShadow = "0 1px 5px rgba(0,0,0,0.1)";
        } else {
            navbar.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
            navbar.style.boxShadow = "none";
        }
    });
    const buttons = document.querySelectorAll(".cta-links a");
    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
            const destination = button.getAttribute("href");
            if (destination === "#") {
                e.preventDefault();
                console.log(`Navegação simulada para: ${button.textContent}`);
            }
        });
    });
});