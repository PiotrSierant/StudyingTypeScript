function oldEnough(age) {
    if (age > 59) {
        throw Error("Jesteś za stary!");
    }
    if (age <= 18) {
        return false;
    }
    return true;
}
function howMuchYouWeigh(kilograms) {
    if (kilograms > 100) {
        throw new Error("You are fat");
    }
    else {
        return 'waga w normie';
    }
    return true;
}
