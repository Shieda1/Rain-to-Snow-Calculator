// https://www.omnicalculator.com/other/rain-to-snow

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const snowRadio = document.getElementById('snowRadio');
const rainRadio = document.getElementById('rainRadio');

let snow;
let rain = v; 

// labels of the inpust
const variable = document.getElementById('variable');

snowRadio.addEventListener('click', function() {
  variable.textContent = 'Rain';
  rain = v;
  result.textContent = '';
});

rainRadio.addEventListener('click', function() {
  variable.textContent = 'Snow';
  snow = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(snowRadio.checked)
    result.textContent = `Snow = ${computesnow().toFixed(5)}`;

  else if(rainRadio.checked)
    result.textContent = `Rain = ${computerain().toFixed(5)}`;
})

// calculation

function computesnow() {
  return Number(rain.value) * 10;
}

function computerain() {
  return Number(snow.value) / 10;
}