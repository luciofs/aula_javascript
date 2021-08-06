//funções clássicas
function sum(a, b){
    return a + b;
}
console.log(sum(5, 10));

//funções anônimas 
var sum = function(a, b){
    return a + b;
}
console.log(sum(22, 15));

//arrow function
var sum = (a, b) => a + b;
console.log(sum(12, 45));
