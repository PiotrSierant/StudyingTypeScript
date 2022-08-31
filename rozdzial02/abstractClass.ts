namespace AbstractNamespace {
    abstract class Vehicle {
        constructor(protected wheelCount: number) {}

        abstract updateWheelCount(newWheelCount: number): void;

        showNumberOfWheels() {
            console.log(`przejechałem ${this.wheelCount} kilometry`);
        }
    }

    class Motorcycle extends Vehicle {
        constructor() {
            super(2);
        }
        updateWheelCount(newWheelCount: number){
            this.wheelCount = newWheelCount;
            console.log(`Motocykl ma ${this.wheelCount} koła.`);
        }    
    }
    class Automobile extends Vehicle {
        constructor() {
            super(4);
        }
        updateWheelCount(newWheelCount: number){
            this.wheelCount = newWheelCount;
            console.log(`Motocykl ma ${this.wheelCount} koła.`);
        }    
        showNumberOfWheels() {
            console.log(`przejechałem ${this.wheelCount} kilometry`);
        }
    }

    const motorCycle = new Motorcycle();
    motorCycle.showNumberOfWheels();
    const autoMobile = new Automobile();
    autoMobile.showNumberOfWheels();
}