// Basic data types

// string
let firstName = "John Doe";

// number
let age: number = 25;

// boolean
let isStudent: boolean = true;
// null
let data: null = null;

// undefined
let data2: undefined = undefined;

// symbol
let id: symbol = Symbol("id");

// any
let notSure: any = 4;

// void
function log(message: string): void {
  console.log(message);
}

// never
function error(message: string): never {
  throw new Error(message);
}

// object
let obj: object = {};

// array
let list: number[] = [1, 2, 3];

// tuple
let tuple: [string, number] = ["John Doe", 25];

// enum
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;
console.log(c); // Output: 1

// Type assertions
let someValue: any = "Hello World";

let strLength: number = (someValue as string).length;

console.log(strLength); // Output: 11

// Type inference
let name1 = "John Doe";
let age1 = 25;
let isStudent1 = true;
let data1 = null;
let data3 = undefined;
let id1 = Symbol("id");
let bigNumber1 = 100n;
let notSure1 = 4;
let obj1 = {};
let list1 = [1, 2, 3];
let tuple1 = ["John Doe", 25];
enum Color1 {
  Red,
  Green,
  Blue,
}
let c1 = Color.Green;
console.log(c1); // Output: 1
let someValue1 = "Hello World";
let strLength1 = (someValue as string).length;
console.log(strLength1); // Output: 11

// reference type---> object
type Person = {
  company?: "JS ENCODER"; //literal type  and optional type
  name: string;
  age?: number; //optional properties
  isStudent: boolean;
};

let person: Person = {
  company: "JS ENCODER",
  name: "John Doe",
  age: 25,
  isStudent: true,
};

let user: Person = {
  name: "nissan",
  isStudent: false,
};
