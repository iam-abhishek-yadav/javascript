// Boolean
const isFlag = true;
console.log(typeof isFlag);

// Number
const digitValue = 2;
console.log(typeof digitValue);

// BigInt
const maxSafeIntegerBigInt = 9007199254740991n;
console.log(typeof maxSafeIntegerBigInt);

// BigInt from decimal notation
const bigintFromDecimal = BigInt(9007199254740991);
console.log(typeof bigintFromDecimal);

// BigInt from string representation
const bigintFromString = BigInt("9007199254740991");
console.log(typeof bigintFromString);

// BigInt from hexadecimal representation
const bigintFromHex = BigInt("0x1fffffffffffff");
console.log(typeof bigintFromHex);

// BigInt from octal representation
const bigintFromOctal = BigInt("0o377777777777777777");
console.log(typeof bigintFromOctal);

// BigInt from binary representation
const bigintFromBinary = BigInt("0b111111111111111");
console.log(typeof bigintFromBinary);

// String
const greetingText = "Hello, JavaScript!";
console.log(typeof greetingText);

// Object
const personObject = { name: "John", age: 30 };
console.log(typeof personObject);

// Array
const numbersArray = [1, 2, 3];
console.log(typeof numbersArray);

// Function
const greetFunction = function () {
  console.log("Hello!");
};
console.log(typeof greetFunction);

// Undefined
const undefinedValue = undefined;
console.log(typeof undefinedValue);

// Null
const nullValue = null;
console.log(typeof nullValue);

// Symbol
const symbolValue = Symbol("mySymbol");
console.log(typeof symbolValue);
