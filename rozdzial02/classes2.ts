class Person2 {
    constructor(private readonly message: string) { }

    speak() {
        console.log('Mówię: ' + this.message);
    }
}

const piter = new Person2('Cześć Piotr');
piter.speak();