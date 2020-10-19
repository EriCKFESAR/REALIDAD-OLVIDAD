const   artista = document.getElementById('artista'),
        descripArtista = document.getElementById('info_artista'),
        carrusel = document.querySelector('.thumbnail-container'),
        titulObra = document.querySelector('#obra > h2'),
        descripObra = document.querySelector('#obra > p'),
        imagenObra = document.querySelector('#img_obra img'),
        linkImgObra = document.querySelector('#img_obra'),
        obraFragmentos = document.getElementById('frac_obra'),
        masInfo = document.getElementById('mas_informacion'),

        rutaObras = 'resours/obras/',
        rutaFragmentos = 'resours/fragmentos/';

/* <Peticion a Json> */
(async function getArtista(){
    const requestURL = `json/${getParametro('artista')}.json`;
    try {
        const response = await fetch(requestURL);
        data = await response.json();
        loadContent();
        loadCarousel();
    } catch (error) {
        location.href="index.html";
    }
})();
/* </Peticion a Json> */

/* <Retorno de variable en url> */
function getParametro(nombre) {
    nombre = nombre.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + nombre + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
/* </Retorno de variable en url> */

/* <Carga de contenido principal en documento html> */
function loadContent(){
    artista.innerHTML = data.artista;
    descripArtista.innerHTML = data.descripcion;
    data.obras.forEach(obra => {
        carrusel.innerHTML +=
        `<div class="item card">
            <h3>${obra.titulo}</h3>
            <img onclick="loadWork('${obra.titulo}')"  src="${rutaObras}${obra.principal}" alt="obra-1">
            <p maxlength="20"> ${obra.descripcion.substring(0,100)}... </p>
        </div>`
    });
}
/* </Carga de contenido principal en documento html> */

/* <Carga de contenido por obra en documento html> */
function loadWork(_obra){
    let obra = data.obras.filter(aux => aux.titulo == _obra);

    masInfo.classList.add('activo');
    document.querySelector('body').classList.add('bloqueo');
    titulObra.innerHTML = obra[0].titulo;
    descripObra.innerHTML = obra[0].descripcion;
    linkImgObra.href = rutaObras + obra[0].principal;
    imagenObra.src = rutaObras + obra[0].principal;
    obraFragmentos.innerHTML = "";
    obra[0].fragmentos.forEach(fragmento => {
        obraFragmentos.innerHTML += `
        <img class="mr-1" src="${rutaFragmentos}${fragmento.fragmento}">
        <p class="mt-1">${fragmento.descripcion}</p>
        `;
    })
}
/* </Carga de contenido por obra en documento html> */

/* <Oculta menu desplegable> */
function exit(){
    masInfo.classList.remove('activo');
    document.querySelector('body').classList.remove('bloqueo');
}
/* </Oculta menu desplegable> */

document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
document.documentElement.style.setProperty('--vhprog', `${window.innerHeight * 0.01}px`);
window.addEventListener('resize', () => { document.documentElement.style.setProperty('--vhprog', `${window.innerHeight * 0.01}px`); });