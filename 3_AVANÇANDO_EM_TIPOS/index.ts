// 1 - arrays
let numbers: number[] = [1, 2, 3];

numbers.push(5);

console.log(numbers[2]);

// numbers = "teste";

const nomes: string[] = ["Pereira", "Sidnei"];

// nomes.push(4);

// 2 - outra sintaxe array

const nums: Array<number> = [100, 200];

nums.push(300);

console.log(nums);

// nums.push("teste")

console.log(nums[0]);

// 3 - any

const arr1: any = [1, "teste", true, [], { nome: "Sidnei" }];

console.log(arr1);

arr1.push([1, 2, 3]);

console.log(arr1);

// 4 - parametros tipados

function soma(a: number, b: number) {
  console.log(a + b);
}

soma(4, 5);

// 5 - retorno de função

function greeting(name: string): string {
  return `Olá ${name}`;
}

console.log(greeting("Sidnei"));

// 6 - funções anônimas em ts

setTimeout(function () {
  const sallary: number = 1000;

  // console.log(parseFloat(sallary))

  // console.log(sallary)
}, 2000);

// 7 - tipos de objetos

function passCoordinates(coord: { x: number; y: number }) {
  console.log("X coordinates: " + coord.x);
  console.log("X coordinates: " + coord.y);
}

const objCoord = { x: 329, y: 84.2 };

passCoordinates(objCoord);

const pessoaObj: { nome: string; surname: string } = {
  nome: "Sidnei",
  surname: "Pereira",
};

// 8 - props opcionais

function showNumbers(a: number, b: number, c?: number) {
  console.log("A: " + a);
  console.log("B: " + b);
  console.log("C: " + c);
}

showNumbers(1, 2, 3);
showNumbers(4, 5);
// showNumbers(6);

// 9 - validando aru=gumanto opcional

function advancedGreeting(firstName: string, lastName?: string) {
  if (lastName !== undefined) {
    return `Olá, ${firstName} ${lastName}, tudo bem?`;
  }

  return `Olá, ${firstName}, tudo bem?`;
}

console.log(advancedGreeting("Sidnei", "Pereira"));
advancedGreeting("sidnei");

// 10 - union types

function showBalance(balance: string | number) {
  console.log(`O saldo da conta é R$${balance}`);
}

showBalance(100);
showBalance("500");

const arr2: Array<number | string | boolean> = [1, "teste", true];

// 11 - avançando em union types

function showUserRole(role: boolean | string) {
  if (typeof role === "boolean") {
    return "Usuário não aprovado!";
  }

  return `A função do usuário é: ${role}`;
}

console.log(showUserRole(false));
console.log(showUserRole("Admin"));

// 12 - type alias
type ID = string | number;

function showId(id: ID) {
  console.log(`O ID é: ${id}`);
}

showId(1);
showId("200");
showId(123);

// 13 - interface

interface Point {
  x: number;
  y: number;
  z: number;
}

function showCoords(obj: Point) {
  console.log(`x: ${obj.x}, y: ${obj.y}, z: ${obj.z}`);
}

const itemCoords = {
  x: 10,
  y: 15,
  z: 12,
};

showCoords(itemCoords);

// 14 - interface x type alias

interface Person {
  name: string;
}

interface Person {
  age: number;
}

const somePerson: Person = { name: "Sidnei", age: 30 };

console.log(somePerson);

type personType = {
  name: string;
};

// type personType = {
//     age number
// }

// 16 - literal types

let test: "Testendo";

test = "Testendo";

console.log(test);

function showDirection(direction: "left" | "right" | "center") {
  console.log(`A direção é: ${direction}`);
}

showDirection("left");

// showDirection("top")

// 16 - non null assertion operators

const p = document.getElementById("some-p");

console.log(p!.innerText);

// 17 - bigint

let n: bigint;

// n = 1

n = 1000n;

console.log(n);

console.log(typeof n);

console.log(n + 100n);

// 18 - symbol

let symbolA: symbol = Symbol("a");
let symbolB = Symbol("a");

console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
