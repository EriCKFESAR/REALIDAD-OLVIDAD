const   masInfo = document.getElementById('mas_informacion'),
        carrusel = document.querySelector('.thumbnail-container'),

        rutaObras = 'resours/obras/';

/* <Peticion a Json> */
(async function getArtista(){
    const requestURL = 'json/indice.json'
    try {
        const response = await fetch(requestURL);
        data = await response.json();
        loadContent();
        loadCarousel();
    } catch (error) {
        console.log(error);
    }
})();
/* </Peticion a Json> */

/* <Carga de contenido principal en documento html> */
function loadContent(){
    data.forEach(obra => {
        carrusel.innerHTML +=
        `<div class="item fx-around fx-column">
            <a class="d-contents" href="single.html?artista=${obra.referencia}">
                <h3 class="txt-capitalize">${obra.titulo}</h3>
                <img src="${rutaObras}${obra.imagen}" alt="obra-1">
                <p maxlength="20"> ${obra.artista}</p>
            </a>
        </div>`
    });
}
/* </Carga de contenido principal en documento html> */

/* <Abre menu desplegable> */
function loadInformation(){
    masInfo.classList.add('activo');
    document.querySelector('body').classList.add('bloqueo');
}
/* <Abre menu desplegable> */


/* <Oculta menu desplegable> */
function exit(){
    masInfo.classList.remove('activo');
    document.querySelector('body').classList.remove('bloqueo');
}
/* </Oculta menu desplegable> */

document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
document.documentElement.style.setProperty('--vhprog', `${window.innerHeight * 0.01}px`);
window.addEventListener('resize', () => { document.documentElement.style.setProperty('--vhprog', `${window.innerHeight * 0.01}px`); });