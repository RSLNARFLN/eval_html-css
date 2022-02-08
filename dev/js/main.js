let burgerbtn = document.querySelector('.burger');
let closeRegion = document.querySelector('.disabler');
let menuBg = document.querySelector('.menu');

burgerbtn.addEventListener('click', BgToggler);
closeRegion.addEventListener('click', BgToggler);

function BgToggler() {
  menuBg.classList.toggle('active');
  closeRegion.classList.toggle('active');
  console.log('active');
}