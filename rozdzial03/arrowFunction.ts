// const myFunc = (message: string): void => {
//     console.log(message);
// }

// myFunc('Witaj!');

const func = () => console.log('func');
const func1 = () => ({ name: 'Dawid' });
const func2 = () => {
    const val = 20;
    return val;
}
console.log(func());
console.log(func1());
console.log(func2());