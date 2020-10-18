var btnMasInfo = document.getElementById('btn_informacion'),
    masInfo = document.getElementById('ms_informacion'),
    salir = document.getElementById('salir_info');

loadCarousel();

btnMasInfo.addEventListener('click', () => {
    masInfo.classList.add('activo');
    document.querySelector('body').classList.add('bloqueo');
});

salir.addEventListener('click', ()=>{
    masInfo.classList.remove('activo');
    document.querySelector('body').classList.remove('bloqueo');
})

document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
document.documentElement.style.setProperty('--vhprog', `${window.innerHeight * 0.01}px`);
window.addEventListener('resize', () => { document.documentElement.style.setProperty('--vhprog', `${window.innerHeight * 0.01}px`); });