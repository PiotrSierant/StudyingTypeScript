function canDrive(usr) {
    console.log("imię użytkownika: ", usr.name);
    if (usr.age >= 16) {
        console.log("może prowadzić auto");
    }
    else {
        console.log("nie ma prawa kierować");
    }
}
// Załóżmy, że nieco później ktoś używa funkcji canDrive, używając zmiennej tom
// bez właściwości age.
var tom = {
    name: "Tomek",
    age: 25
};
canDrive(tom);
