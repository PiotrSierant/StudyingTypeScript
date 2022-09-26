namespace GenericNameSpace {
    interface Wheel {
        count: number;
        diameter: number;
    }

    interface Vehicle<T> {
        getName(): string;
        getWheelCount: () => T;
    }

    class Automobile implements Vehicle<Wheel> {
        constructor(private name: string, private wheel: Wheel) { }

        getName(): string {
            return this.name;
        }

        getWheelCount(): Wheel {
            return this.wheel;
        }
    }

    class Chevy extends Automobile {
        constructor() {
            super("Chevy", { count: 4, diameter: 10 })
        }
    }

    const chevy = new Chevy();
    console.log(`Nazwa auta ${chevy.getName()}`);
    console.log(`Info o kołach: ${chevy.getWheelCount()}`);
}