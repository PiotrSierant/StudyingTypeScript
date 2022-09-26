interface HasLength {
    length: number;
}

function getLength<T extends HasLength>(arg: T): number {
    return arg.length;
}

// console.log(getLength<number>(22)); // error type liczby nie mają właściwości length.
console.log(getLength("Witaj świecie"));