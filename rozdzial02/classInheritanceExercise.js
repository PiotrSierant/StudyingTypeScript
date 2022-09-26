var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(wheelCount) {
        this.wheelCount = wheelCount;
    }
    Vehicle.prototype.showNumberOfVehicle = function () {
        console.log("Liczba k\u00F3\u0142 w poje\u017Adzie to ".concat(this.wheelCount));
    };
    return Vehicle;
}());
var Motorcycyle = /** @class */ (function (_super) {
    __extends(Motorcycyle, _super);
    function Motorcycyle() {
        return _super.call(this, 2) || this;
    }
    Motorcycyle.prototype.updateWheelCount = function (newWheelCount) {
        this.wheelCount = newWheelCount;
    };
    return Motorcycyle;
}(Vehicle));
var Automobile = /** @class */ (function (_super) {
    __extends(Automobile, _super);
    function Automobile() {
        return _super.call(this, 4) || this;
    }
    return Automobile;
}(Vehicle));
var motorCycle = new Motorcycyle();
motorCycle.showNumberOfVehicle();
motorCycle.updateWheelCount(5);
motorCycle.showNumberOfVehicle();
var autoMobile = new Automobile();
autoMobile.showNumberOfVehicle();
