//Exercise 1
// Array: Definimos los valores de las resistencias [Ejemplo 1 [-1,5,6,3]]
let resistances = [-1, 5, 6, 3];

//.map: es un método de iteración, se puede pensar en el como un bucle para avanzar de un elemento a otro en una lista, manteniendo el orden y la posición de cada elemento.
// Math.abs equivale a el valor absoluto de un número.
let resistancesPositive = resistances.map(Math.abs)

//Sumatoria de las resistencias en serie
//.reduce: ejecuta una función reductora en cada elemento de la matriz para reducirlo a uno (de izq a der).
/* reduce () toma dos argumentos */
//let resistanceTotal = resistancesPositive.reduce((acumulador, resistencia) => acumulador + resistencia, 0);
let resistanceTotal = resistancesPositive.reduce(function (result, item){
    return result + item;
}, 0);
console.log(`Total series resistance is:  ${resistanceTotal} ohms`)


//Exercise 2 
//Definir la función que divide un numero en sus mitades
function divToHalves (number){
    //Calcular la 1ra mitad
    let half1 = number / 2;
    //Calcular la 2da mitad
    let half2 =number - half1;
    //Devolver las mitades en un array
    return [half1, half2];
}
//Example
let number = 8;
let halves = divToHalves (number);

console.log(halves);

// Exercise 3
// Definimos el array con los nombres de los miembres (Ejemplo1)
let members = ['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'];
let secretName = secretSociety(members);

//Creamos una función llamada `secretSociety`  que toma un array de `names` como argumento.
//.map ejecuta una función para cada elemento del array, devolviendo un nuevo array con los resultados.
/*La función pasada a map() toma un parámetro nombre, que es cada elemento del array nombres*/
//.charAt(0) obtiene la primera letra del string nombre
//.join('')combina todos los elementos del array en una cadena, sin ningún separador
function secretSociety(names){
    let nameSecretSociety = names.map(nombre => nombre.charAt(0)).join('');
    return nameSecretSociety;
}

console.log(secretName);

//Exercise 4
//Crear la lista de usuarios con sus estados (online -offline).
const users =  [
    { userName: `mockIng99`, online: true},
    { userName: `J0eyPunch`, online: true},
    { userName: `glassedFer`, online: false},
    { userName: `hellAnaye`, online: true},
    { userName: `zoroGreen`, online: false},
    { userName: `chelosKitty`, online: true},
];

//Función que determina el estado de los users.
//.filter itera sobre cada userName de la lista users. (crea un nuevo arreglo y devuelve todos los elementos que pasan la condición especificada en la llamada en el callback.)
//.includes verifica si el nombre del user esta en la lista userNames
function onlineStatus(userNames) {
    const onlineUsers = users.filter(user => userNames.includes(user.userName) && user.online);

    const message =
        onlineUsers.length === 0 ? `Ningún user online`:
        onlineUsers.length === 1 ? `${onlineUsers[0].userName} esta en línea`:
        onlineUsers.length === 2 ? `${onlineUsers[0].userName} y ${onlineUsers[1].userName} estan en línea`:
        `${onlineUsers[0].userName}, ${onlineUsers[1].userName} y ${onlineUsers.length -2} más están en línea`;
        return message;
}
console.log(onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer']));

//Exercise5
function multiples(number, length){
    let mult = [];
//.push es usado para agregar un elemento al final de un arreglo.
// Se utiliza el bucle for que itera desde 1 hasta el valor de `lenght (longitud)`
//En cada iteración se calcula el multiplo del numero (`number * i`) y se agrega al array `mult` usando `push`
    for (let i = 1; i<= length; i++){
        mult.push(number * i);
    }

    return mult;
}

console.log(multiples (2,10));




//Exersice 6
function positiveDominat(arr) {
//se inicializa una variable en 0 para contar los elementos de la matriz
    let positiveInTheArray = 0;
// Su usa un cucle `for`, en cada iteración se verifica si el elemento es >0 (positivo), si cumple se incrementa en PositiveInTheArray
    for (let i = 0; i < arr.length; i++){
        if (arr [i] > 0){
            positiveInTheArray++;
        }
    }
//Se pide una comparación de los numeros positivos en positiveInTheArray,, con la mitad de la longuitud del array [matriz]
    return positiveInTheArray > arr.length / 2;
}

console.log(positiveDominat ([-1, -3, -5, 4, 6767]));



//Exercise7
function procesaArray(arr) {
    let long = arr.length;

    // Para eliminar el elemento medio si la longitud es impar
    if (long % 2 !== 0) {
        arr.splice(Math.floor(long / 2), 1);
        long = arr.length;
    }
//.splice se utiliza principalmente cuando necesitas eliminar o añadir nuevos elementos a un arreglo
//.floor redondea un número dado hacia el número entero anterior.
    const mitad = long / 2;
    const firstHalf = arr.slice(0, mitad);
    const secondHalf = arr.slice(mitad).reverse();
// Suma de cada número de la primera parte con los números inversos de la segunda parte
    const result = firstHalf.map((num, indx) => (num + secondHalf[indx]) / 2);

    return result;
}
//Example:
console.log(procesaArray([1, 2, 3, 5, 22, 6])); 