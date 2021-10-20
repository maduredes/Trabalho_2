function myFunction2() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function menuBold(className) {
document.getElementsByClassName(className)[0].classList.add("menu-bold");
}

function dropdown(){
  myFunction2();
  menuBold(className);
}

function inicio() {
  showInicio();
  menuBold('item1');
}

function showInicio(){
  document.getElementById('inicio').classList.add('visible');
  document.getElementById('transferencia').classList.remove('visible');
  document.getElementById('contaCorrente').classList.remove('visible');
}

function contaCorrente() {
  showContaCorrente();
  menuBold('item2');
}

function showContaCorrente(){
  document.getElementById('transferencia').classList.remove('visible');
  document.getElementById('inicio').classList.remove('visible');
  document.getElementById('contaCorrente').classList.add('visible');
}

function transferencia() {
  showTransferencia();
  menuBold('item3');
}

function showTransferencia(){
  document.getElementById('inicio').classList.remove('visible');
  document.getElementById('contaCorrente').classList.remove('visible');
  document.getElementById('transferencia').classList.add('visible');
}