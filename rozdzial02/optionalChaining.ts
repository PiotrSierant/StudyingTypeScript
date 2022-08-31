namespace OptionalChainingNS {
    interface Wheels {
        count?: number;
    }

    interface Vehicle {
        wheels?: Wheels;
    }

    class Automobile implements Vehicle {
        constructor(public wheels?: Wheels) {}
    }

    const car: Automobile | undefined = new Automobile({
        count: undefined
    });
    console.log("Auto: ", car);
    console.log("Informacje o kołach: ", car?.wheels);
    console.log("Liczba kół: ", car?.wheels?.count);
    
    // const count = !car ? 0 
    // : !car.wheels ? 0 
    // : !car.wheels.count ? 0
    // : car.wheels.count;
}