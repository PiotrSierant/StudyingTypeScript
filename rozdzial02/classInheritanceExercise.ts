class Vehicle {
    constructor(protected wheelCount: number) { }

    showNumberOfVehicle() {
        console.log(`Liczba kół w pojeździe to ${this.wheelCount}`);
    }
}
class Motorcycyle extends Vehicle {
    constructor() {
        super(2);
    }
    updateWheelCount(newWheelCount: number) {
        this.wheelCount = newWheelCount;
    }
}
class Automobile extends Vehicle {
    constructor() {
        super(4);
    }
}
const motorCycle = new Motorcycyle();
motorCycle.showNumberOfVehicle();
motorCycle.updateWheelCount(5);
motorCycle.showNumberOfVehicle();
const autoMobile = new Automobile();
autoMobile.showNumberOfVehicle();