var Person2 = /** @class */ (function () {
    function Person2(message) {
        this.message = message;
    }
    Person2.prototype.speak = function () {
        console.log('Mówię: ' + this.message);
    };
    return Person2;
}());
var piter = new Person2('Cześć Piotr');
piter.speak();
