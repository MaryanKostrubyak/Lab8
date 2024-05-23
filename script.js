document.addEventListener("DOMContentLoaded", function() {
    var burger = document.getElementById("burger"),
        nav = document.getElementById("nav");

    burger.addEventListener("click", function() {
        nav.classList.toggle("active");
    });
});