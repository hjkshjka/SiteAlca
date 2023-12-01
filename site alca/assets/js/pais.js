const select = document.querySelector('#id_pais_atuacao');

console.log(select);

const indice = select.selectedIndex;
const valor = select.value;
const text = select.options[indice].text;

console.log(indice);
console.log(valor);
console.log(text);

function selectCountry() {

    let pais = document.querySelector('#id_pais_atuacao');

    let selectedValue = pais.value;
  
    console.log('País selecionado: ', selectedValue);
}