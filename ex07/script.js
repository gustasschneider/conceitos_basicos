/*function showTime() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    let txt = h+':'+m+':'+s;

    document.querySelector('#demo').innerHTML = txt;
}

let timer;

function comecar() {
    timer = setInterval(showTime, 1000);
}

function parar() {
    clearInterval(timer);
}*/

//EXEMPLO DO "setTimeOut"
let timer;
function comecar(){
    timer = setTimeout(function () {
        document.querySelector('#demo').innerHTML = 'Rodou';
    }, 2000);
}

function parar() {
    clearTimeout(timer);
}
