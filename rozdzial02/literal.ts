let literal: "Tomek" | "Linda" | "Jarek" | "Sylwia" = "Linda";
literal = "Sylwia";
// literal = "Janek"; <-- error Janka nie ma w literale.
console.log(literal);

let literalNumber: 4 | 8 | 12 | 18 | 20 = 8;
// literalNumber = 3 // error, brak 3 w literale. 
console.log(literalNumber);