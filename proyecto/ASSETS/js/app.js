const botonArriba = document.getElementById("btn-arriba");

botonArriba.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});