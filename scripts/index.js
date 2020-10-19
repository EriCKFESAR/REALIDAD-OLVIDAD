const masInfo = document.getElementById('mas_informacion');

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

loadCarousel();
document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
document.documentElement.style.setProperty('--vhprog', `${window.innerHeight * 0.01}px`);
window.addEventListener('resize', () => { document.documentElement.style.setProperty('--vhprog', `${window.innerHeight * 0.01}px`); });