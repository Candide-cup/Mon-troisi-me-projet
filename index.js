window.addEventListener("scroll", function () {
    let navbarre = document.querySelector(".navbarre");
    let scrollPosition = window.scrollY;

    if (scrollPosition < 100) {
        navbarre.style.backgroundColor = "blue";
    } else if (scrollPosition < 300) {
        navbarre.style.backgroundColor = "green";
    } else if (scrollPosition < 500) {

    }
    
})