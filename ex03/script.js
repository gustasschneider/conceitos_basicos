let carro = {
    nome: 'Fiat',
    modelo: 'Uno',
    peso: '800kg',
    ligado: false,
    ligar: function () {
        this.ligado = true;
        console.log("Ligando o " + this.modelo);
        console.log("Carro ligado!!");
    },
    acelerar: function () {
        if(this.ligado == true){
            console.log("VRUMMMMM VRUMMMMM");
        }
    }
};

//console.log(carro['nome']);
//console.log(carro.nome);
//console.log("Modelo: " + carro.modelo);

//carro.ligar();
//carro.acelerar();


let carros = [
    {nome: 'Lamborguini', modelo: 'Aventador'},
    {nome: 'Chevrolet', modelo: 'Camaro'},
    {nome: 'Ford', modelo: 'Mustang'},
    {nome: 'Nissan', modelo: 'Skyline'}
];

console.log(carros[3].nome + " Modelo: " + carros[3].modelo);


