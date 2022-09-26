var InterfaceNamespaceExercise;
(function (InterfaceNamespaceExercise) {
    var Motorcycle = /** @class */ (function () {
        function Motorcycle(name) {
            this.name = name;
        }
        Motorcycle.prototype.updateWheelCount = function (newWheelCount) {
            this.wheelCount = newWheelCount;
            console.log("pojazd ma ".concat(this.wheelCount, " k\u00F3\u0142."));
        };
        Motorcycle.prototype.showNumberOfWheels = function () {
            console.log("pojazd ma ".concat(this.wheelCount, " k\u00F3\u0142."));
        };
        Motorcycle.prototype.getFullName = function () {
            return "MC- ".concat(this.name);
        };
        return Motorcycle;
    }());
    var moto = new Motorcycle('BMW');
    console.log(moto.getFullName());
})(InterfaceNamespaceExercise || (InterfaceNamespaceExercise = {}));
