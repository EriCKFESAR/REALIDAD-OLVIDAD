const   artista = document.getElementById('artista'),
        info_artista = document.getElementById('info_artista'),
        carrusel = document.querySelector('.thumbnail-container'),
        titulo = document.querySelector('#obra > div > h2'),
        descripcion = document.querySelector('#obra > p'),
        imagen = document.getElementById('img_obra'),
        fragmentos = document.getElementById('frac_obra'),
        masInfo = document.getElementById('ms_informacion'),

        ruta_obras = 'resours/obras/',
        ruta_fragmentos = 'resours/fragmentos/';

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

function getParametro(nombre) {
    nombre = nombre.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + nombre + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function loadContent(){
    artista.innerHTML = data.artista;
    info_artista.innerHTML = data.descripcion;
    data.obras.forEach(obra => {
        carrusel.innerHTML +=
        `<div class="item card">
            <h3>${obra.titulo}</h3>
            <img onclick="loadWork('${obra.titulo}')"  src="${ruta_obras}${obra.principal}" alt="obra-1">
            <p maxlength="20"> ${obra.descripcion.substring(0,100)}... </p>
        </div>`
    });
}

function loadWork(obrTitulo){
    let obra = data.obras.filter(aux => aux.titulo == obrTitulo);
        
    masInfo.classList.add('activo');
    document.querySelector('body').classList.add('bloqueo');
    titulo.innerHTML = obra[0].titulo;
    descripcion.innerHTML = obra[0].descripcion;
    imagen.src = ruta_obras + obra[0].principal;
    fragmentos.innerHTML = "";
    obra[0].fragmentos.forEach(fragmento => {
        fragmentos.innerHTML += `
        <img class="mr-1" src="${ruta_fragmentos}${fragmento.fragmento}">
        <p class="mt-1">${fragmento.descripcion}</p>
        `;
    })
}

function exitInfo(){
    masInfo.classList.remove('activo');
    document.querySelector('body').classList.remove('bloqueo');
}

document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
document.documentElement.style.setProperty('--vhprog', `${window.innerHeight * 0.01}px`);
window.addEventListener('resize', () => { document.documentElement.style.setProperty('--vhprog', `${window.innerHeight * 0.01}px`); });