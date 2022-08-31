let obj: { name: string } & { age: number } = {
    name: 'Tomek',
    age: 25
}

console.log(obj);

let response: { name: string, age: number } = {
    name: 'Tom',
    age: 30
}

console.log(response);
