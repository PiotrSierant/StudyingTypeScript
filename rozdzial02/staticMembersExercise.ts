class ClassA {
    static typeName: string;
    constructor() { }
    static getFullName() {
        return `ClassA ${ClassA.typeName}`;
    }
}

const a = new ClassA();
console.log(ClassA.typeName);

class Runner {
    static lastRunTypeName: string;
    constructor(private typeName: string) { }
    run() {
        Runner.lastRunTypeName = this.typeName;
    }
}

const b = new Runner('b');
const c = new Runner('c');
c.run();
b.run();
// wyświetli ostatnią instancję klasy która wywowłała funkcję run.
console.log(Runner.lastRunTypeName);
