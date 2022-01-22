
let calcular = document.getElementById('calcular')
let resultado = document.getElementById('resultado')

function cal() {
   let nome = document.getElementById('nome').value
   let peso = document.getElementById('peso').value
   let altura = document.getElementById('altura').value
   let imc = Number(peso / (altura * altura)).toFixed(1)
   let tab = ""
   if (imc < 18.5) {
      tab = 'você está abaixo do peso.'
   }
   else if (imc < 24.9) {
      tab = 'você está com o peso ideal.'
   }
   else if (imc < 29.9) {
      tab = 'você está levemante acima do peso.'
   }
   else if (imc < 34.9) {
      tab = 'você está com obesidade grau 1.'
   }
   else if (imc < 39.9) {
      tab = 'você está com obesidade grau 2(severa)'
   }
   else if (imc >= 40) {
      tab = 'você está com obesidade grau 3(mórbida)'
   }
   resultado.textContent = `${nome} seu IMC é ${imc} ${tab}`
}
calcular.addEventListener('click', cal)



