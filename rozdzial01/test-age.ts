interface User {
    name: string;
    age: number;
}

function canDrive(usr: User) {
    console.log("imię użytkownika: ", usr.name);

    if(usr.age >= 16) {
        console.log("może prowadzić auto");
    } else {
        console.log("nie ma prawa kierować");
    }
}

const tom: User = {
    name: "Tomek",
    age: 25
}

canDrive (tom);