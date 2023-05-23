const boton = document.getElementById("navegacionDesplegable");
const menu = document.getElementById("navegacion");

boton.addEventListener('click', () => {
    console.log("click a menu desplegable");
    menu.classList.toggle('hidden');
})