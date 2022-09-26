namespace InterfaceNamespaceExercise {
    interface Thing {
        name: string;
        getFullName: () => string;
    }
    interface Vehicle extends Thing {
        wheelCount: number;
        updateWheelCount: (newWheelCount: number) => void;
        showNumberOfWheels: () => void;
    }
    
    class Motorcycle implements Vehicle {
        name: string;
        wheelCount: number;
        constructor(name: string) {
            this.name = name;
        }
        updateWheelCount(newWheelCount: number) {
            this.wheelCount = newWheelCount;
            console.log(`pojazd ma ${this.wheelCount} kół.`);
        }
        showNumberOfWheels() {
            console.log(`pojazd ma ${this.wheelCount} kół.`);
        }
        getFullName() {
            return `MC- ${this.name}`;
        }
    }
    const moto = new Motorcycle('BMW')
    console.log(moto.getFullName());
    
}
