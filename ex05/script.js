let lista = ['Ovo', 'Farinha', 'Fermento', 'Leite'];
let lista2 = ['Prato', 'Batedeira', 'Forma'];

//Metodo "toString"
//let toString = lista.toString();

//Metodo "join"
//let join = lista.join('-');

//Metodo indexOf
//let indexOf = lista.indexOf('Leite');

//Metodo pop
//lista.pop();//remove o ultimo valor
//let pop = lista;

//Metodo shift
//lista.shift();//remove o primeiro valor
//let shift = lista;

//Metodo push (formas de alterar e add os registros do array)
lista.push('Nescau');//add
lista[1] = 'Farinha de Trigo';//altera
lista[lista.length] = 'Fermento Royal';//add

//Metodo splice
//lista.splice(3,1);//remove
//let splice = lista;

//Metodo concat
//let res = lista.concat(lista2);

//Metodo sort
//let res = lista2.sort();//ordena em ordem alfabetica

//Metodo reverse
//let res = lista.reverse();


let nums = [45,4,9,16,25];
let nums2 = [];

//Funcao map
/*nums2 = nums.map(function (item) {
   return item * 2;
});*/

//Funcao filter //Algum registro é menor que 20?
/*nums2 = nums.filter(function (item) {
    if(item < 20){
        return true;
    }else {
        return false;
    }
});*/

//Funcao every //Todo mundo é maior que 20?
/*nums2 = nums.every(function (item) {
    return (item > 20)? true : false
});*/

//Funcao some
/*nums2 = nums.some(function (item) {
    return (item > 50)? true : false
});*/

//Funcao find e findIndex
let pessoas = [
    {id: 1, nome: 'Gustavo', sobrenome: 'Schneider'},
    {id: 2, nome: 'Henrique', sobrenome: 'Dunha'},
    {id: 3, nome: 'Luiz', sobrenome: 'Hass'}
]
let p = pessoas.find(function (item) {
    return (item.sobrenome == 'Schneider')? true : false
});

// O findIdex busca a posição da pessoa
console.log(p);