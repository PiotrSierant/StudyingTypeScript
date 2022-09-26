var Person2 = /** @class */ (function () {
    function Person2() {
    }
    Person2.prototype.speak = function () {
        console.log(this.message);
    };
    return Person2;
}());
var piter = new Person2();
piter.message = 'Cześć';
piter.speak();
