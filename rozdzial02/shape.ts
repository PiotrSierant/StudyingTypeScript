class Person {
    name: string;
}
const jill: { name: string } = {
    name: "Julka"
};
const person: Person = jill;
console.log(person);