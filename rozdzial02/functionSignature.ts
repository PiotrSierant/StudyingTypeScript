type Run = (miles: number) => boolean;
let runner: Run = function (miles: number): boolean {
    if (miles > 10) {
        return true;
    }
    return false;
}

console.log(runner(9));

type Eat = (kilograms: number) => boolean;
let eater: Eat = function (kilograms: number): boolean {
    if (kilograms > 10) {
        return true;
    }
    return false
}

console.log(eater(20));
