// 1 - Numbers
var x = 10;
x = 15;
console.log(typeof x);
var y = 3.14329492349;
console.log(y.toPrecision(3));
// 2 - string
var firstName = "Sidnei";
console.log(firstName.toUpperCase());
var lastName = "Pereira";
var fullName;
fullName = firstName + " " + lastName;
console.log(fullName);
// 3 - boolean
var a = true;
console.log(typeof a);
a = false;
// 4 - inference e annotation
var ann = "Teste";
var inf = "Testando";
// 5 - compile automatico
var q = 10;
console.log(q);
q = 11;
console.log(q);
// 6 - desafio 2
var n1 = 10;
var numberToString = n1.toString();
var printMyNumber = "Eu quero imprimir o n\u00FAmero ".concat(numberToString);
console.log(printMyNumber);
