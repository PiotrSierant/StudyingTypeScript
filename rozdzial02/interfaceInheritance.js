var InterfaceNamespace;
(function (InterfaceNamespace) {
    var Motorcycle = /** @class */ (function () {
        function Motorcycle(name) {
            // W przypadku implementacji interfejsów nie trzeba
            // wywoływać konstruktora klasy bazowej
            this.name = name;
        }
        Motorcycle.prototype.updateWheelCount = function (newWheelCount) {
            this.wheelCount = newWheelCount;
            console.log("Pojazd ma " + this.wheelCount + " k\u00F3\u0142.");
        };
        Motorcycle.prototype.showNumberOfWheels = function () {
            console.log("Pojazd przejecha\u0142 " + this.wheelCount + " kilometry.");
        };
        Motorcycle.prototype.getFullName = function () {
            return "MC-" + this.name;
        };
        return Motorcycle;
    }());
    var moto = new Motorcycle("moto-dla-początkujących");
    console.log(moto.getFullName());
})(InterfaceNamespace || (InterfaceNamespace = {}));
