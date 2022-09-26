class Person2 {
    constructor(private message: string) { }

    speak() {
        console.log(this.message);
    }
}

const piter = new Person2('cześć');
piter.speak();