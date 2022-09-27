const callerObj = {
    name: 'Janek'
}

function checkMyThis(age) {
    console.log(`Czym jest this: ${this}`)
    console.log(`Czy mam imię? ${this.name}`)
    this.age = age;
    console.log(`Ile mam lat? ${this.age}`);
}

checkMyThis();
checkMyThis.call(callerObj, 25);
checkMyThis.call({ name: 'Piotr' }, 25);