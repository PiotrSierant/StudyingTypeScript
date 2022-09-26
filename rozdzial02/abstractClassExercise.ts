namespace AbstractNameSpace {
    abstract class Vehicle {
        constructor(protected wheelCount: number) {}

        abstract updateWheelCount(newWheelCount: number): void;
    
        showNumberOfWheels() {
            console.log(`Liczba kół w pojeździe: ${this.wheelCount}`);
        }
    }
    class Motorcycyle extends Vehicle {
        constructor() {
            super(2);
        }
        updateWheelCount(newWheelCount: number) {
            this.wheelCount = newWheelCount;
            console.log(`Motocykl ma ${this.wheelCount} koła`);
        }
    }
    class Automobile extends Vehicle {
        constructor() {
            super(4);
        }
        updateWheelCount(newWheelCount: number) {
            this.wheelCount = newWheelCount;
            console.log(`Motocykl ma ${this.wheelCount} koła`);
        }
        showNumberOfWheels(): void {
            console.log(`Liczba kół w pojeździe to: ${this.wheelCount}`);
        }
    }
    const motorCycle = new Motorcycyle();
    motorCycle.updateWheelCount(1);
    const autoMobile = new Automobile();
    autoMobile.updateWheelCount(3);
}
