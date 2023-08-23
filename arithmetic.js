
let result = document.getElementById('text');
let label = document.getElementById('lab');
let label2 = document.getElementById('lab2');

function add() {
    const a = Number(document.getElementById('a').value);
    const b = Number(document.getElementById('b').value);
    let sum = a + b;
    result.textContent = `Result : ${sum}`
}



function sub(){
    const a = Number(document.getElementById('a').value);
    const b = Number(document.getElementById('b').value);
    let sub = a - b;
    result.textContent = `Result : ${sub}`
}





function mul(){
    const a = Number(document.getElementById('a').value);
    const b = Number(document.getElementById('b').value);
    let mul = a * b;
    result.textContent = `Result : ${mul}`
}







function div(){
    const a = Number(document.getElementById('a').value);
    const b = Number(document.getElementById('b').value);
    let div = a / b;
    result.textContent = `Result : ${div}`
}




function max(){
    const a = Number(document.getElementById('a').value);
    const b = Number(document.getElementById('b').value);
    let max = Math.max(a,b);
    result.textContent = `Result : ${max}`
}




function min(){
    const a = Number(document.getElementById('a').value);
    const b = Number(document.getElementById('b').value);
    let min = Math.min(a,b);
    result.textContent = `Result : ${min}`
}


function sqrt(){
    const a = Number(document.getElementById('a').value);
    const b = Number(document.getElementById('b').value);
    let sqrt = Math.sqrt(a,b);
    result.textContent = `Result : ${sqrt}`
}


function clr(){
    const a = Number(document.getElementById('a').value);
    const b = Number(document.getElementById('b').value);
    let clr = " ";
    result.textContent = `Result : ${clr}`
}





result.style.textAlign = 'center'
result.style.color = 'color'
result.style.fontFamily = 'verdana'


label.style.color = 'red';
label.style.fontFamily = 'verdana'
label.style.margin = '1rem'
label.style.textTransform = 'upperCase'


label2.style.color = 'red';
label2.style.fontFamily = 'verdana'
label2.style.margin = '1rem'
label2.style.textTransform = 'upperCase'


