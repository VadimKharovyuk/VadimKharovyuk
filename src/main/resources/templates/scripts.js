document.addEventListener("DOMContentLoaded", function() {
    // Preloader
    window.onload = function() {
        document.getElementById("preloader").style.display = "none";
    };

    // Scroll to section
    document.querySelectorAll('.anchor_nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
