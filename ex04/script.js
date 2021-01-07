let dia = 5;
let diaNome = '';

switch (dia){
    case 6:
    case 7:
        diaNome = 'Final de Semana';
        break;
    default:
        diaNome = 'Dia de semana';
}

document.getElementById("dia").innerHTML = "Hoje é: " +diaNome;


//----------------------------> For loop

let texto = '';

for(let i = 1; i <= 10; i++){
    texto = texto + i + '<br/>';
}

document.getElementById("demo").innerHTML = texto;

//----------------------------> Loop Array

let carros = ['Ferrari', 'Mustang', 'Bugati', 'Skyline'];
let html = '<ul>';

for(let i in carros){
    html += '<li>' + carros[i] + '</li>';
}

html += '</ul>';

document.getElementById("demoCar").innerHTML = html;

//----------------------------> Loop While

let html3 = '';
let c = 1;

while (c <= 10){
    html3 += "Numero: " +c+ "<br/>";
    c++;
}

document.getElementById("demoLoopWhile").innerHTML = html3;