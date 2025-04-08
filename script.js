document.addEventListener("DOMContentLoaded", () => {
    const navigation = document.querySelector(".navigation");

    // Show navigation when scrolling down
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navigation.classList.add("visible");
        } else {
            navigation.classList.remove("visible");
        }
    });

    // Smooth scrolling for links
    const scrollLinks = document.querySelectorAll("[data-scroll]");
    scrollLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: "smooth" });
        });
    });
});