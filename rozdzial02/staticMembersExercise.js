var ClassA = /** @class */ (function () {
    function ClassA() {
    }
    ClassA.getFullName = function () {
        return "ClassA ".concat(ClassA.typeName);
    };
    return ClassA;
}());
var a = new ClassA();
console.log(ClassA.typeName);
var Runner = /** @class */ (function () {
    function Runner(typeName) {
        this.typeName = typeName;
    }
    Runner.prototype.run = function () {
        Runner.lastRunTypeName = this.typeName;
    };
    return Runner;
}());
var b = new Runner('b');
var c = new Runner('c');
c.run();
b.run();
// wyświetli ostatnią instancję klasy która wywowłała funkcję run.
console.log(Runner.lastRunTypeName);
