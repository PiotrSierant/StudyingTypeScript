class Person2 {
    constructor() {}
    message: string;
    speak() {
        console.log(this.message);
    }
}

const piter = new Person2();
piter.message = 'Cześć';
piter.speak();