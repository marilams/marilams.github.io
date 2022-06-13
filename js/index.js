const bill = document.getElementById('billAmount');
const btnFive = document.getElementById('cinco');
const btnTen = document.getElementById('diez');
const btnQuince = document.getElementById('quince');
const btnVeinticinco = document.getElementById('veinticinco');
const btnCincuenta = document.getElementById('cincuenta');
const custom = document.getElementById('custom');
const text = document.getElementById('resultado');
const people = document.getElementById('people');
const resultado = document.getElementById('total-two');
const propina = document.getElementById('total-one')
const container = document.querySelector('.button-container');
const botones = document.querySelectorAll('.btn');
const btnReset = document.getElementById('btnReset');


resultado.innerText = `$${'0.00'}`;
propina.innerText = `$${'0.00'}`;

var a;
var b;
var c;

container.addEventListener('click', (e) =>{
     if (e.target == container){
         console.log("Yes!!!")}
         else {
             botones.forEach((element) => {
                 element.classList.remove('btnActive')
             })
             e.target.classList.add('btnActive');
         }  
})


btnFive.addEventListener('click', () => b = 0.05);
btnTen.addEventListener('click', () => b = 0.1);
btnQuince.addEventListener('click', () => b = 0.15);
btnVeinticinco.addEventListener('click', () => b = 0.25);
btnCincuenta.addEventListener('click', () => b = 0.5);
custom.addEventListener('keyup', () => {
    b = custom.valueAsNumber/100;
    totalTip()
});
people.addEventListener('keyup', totalTip);
btnReset.addEventListener('click', reset);



function totalTip (){
    a = bill.valueAsNumber;
    c = people.valueAsNumber;
    let res = (a * b)/c;
        if (Number.isNaN(res) === true) {
            propina.innerText = `$${"0.00"}`;
        } else (propina.innerText = `$${res.toFixed(2)}`)
    totalAmount()
    btnReset.classList.remove('desabled');
}

function totalAmount(){
    let tAmount = (a + (a*b))/c;
        if(Number.isNaN(tAmount) === true){
            resultado.innerText = `$${"0.00"}`;
        } else (resultado.innerText = `$${tAmount.toFixed(2)}`);  
        btnReset.classList.remove('desabled');
}


function reset(){
    resultado.innerText = `$${'0.00'}`;
    propina.innerText = `$${'0.00'}`;
    bill.value = ``;
    people.value = ``;
    botones.forEach((element) => {
        element.classList.remove('btnActive');
    })
    btnReset.classList.add('desabled');
}

 