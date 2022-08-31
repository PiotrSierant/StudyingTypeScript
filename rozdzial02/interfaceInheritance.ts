namespace InterfaceNamespace {
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
            // W przypadku implementacji interfejsów nie trzeba
            // wywoływać konstruktora klasy bazowej
            this.name = name;
        }
        updateWheelCount(newWheelCount: number){
            this.wheelCount = newWheelCount;
            console.log(`Pojazd ma ${this.wheelCount} kół.`);
        }
        showNumberOfWheels() {
            console.log(`Pojazd przejechał ${this.wheelCount} kilometry.`);
        }
        getFullName() {
            return "MC-" + this.name;
        }
    }
    const moto = new Motorcycle("moto-dla-początkujących");
    console.log(moto.getFullName());
}