document.addEventListener("DOMContentLoaded", function() {
    var currentUrl = window.location.href;
    var navLinks = document.querySelectorAll("#navbar ul li a");
    navLinks.forEach(function(navLink) {
        if (navLink.getAttribute("href") === currentUrl) {
            navLink.classList.add("active");
        }
    });
});
