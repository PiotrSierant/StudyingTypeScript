
function runMore(distance: number): number {
    return distance + 10;
}

console.log(runMore(20));


function eat(calories: number) {
    return ("Zjadłem " + calories + " kalorii.");
}
function sleepIn(hours: number): void {
    console.log("Spałem " + hours + " godzin.");
}

let ate = eat(100);
console.log(ate);
let slept = sleepIn(10);
console.log(slept);