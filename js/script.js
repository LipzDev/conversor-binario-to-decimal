const form = document.querySelector('form input[type="number"]');
const inputResult = document.querySelector('form input[type="text"]');
const button = document.querySelector('button');

function filterInput(e){
   e.preventDefault();     
      let number = form.value; 
      let filter = /[^2-9]/g;
      let binary = number.match(filter);      
      let arrToStr = String(binary);
      let result = arrToStr.replace(/[^0-9]/g, '');  
      
      if(form.value == result){
         convertToDecimal(result);
      } else{
         form.value = '';
         alert('Insira apenas números binários!');
      } 
}

// CONVERT TO BINARY

function convertToDecimal(value){
   let valueBinary = value.split("").reverse();
   let soma = 0;

   valueBinary.forEach((item,index) => {
      let potencia = 2 ** index;   
      let resultado = item * potencia;
      soma += resultado;
   });

   inputResult.value = soma;   
}

button.addEventListener('click', filterInput)

