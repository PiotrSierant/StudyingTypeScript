function getEmployee(id) {
    return {
        name: 'Jan',
        age: 35,
        address: 'Skryptów Wsadowych 123',
        country: 'Polska'
    }
}

// const { name: fullName, age } = getEmployee(22);
// console.log('pracownik:', fullName, age);

const { name: firstName, age, address: street, country } = getEmployee(10);
console.log('pracownik', firstName, age, street, country);



function getEmployeeWorkInfo(id) {
    return [
        id,
        'ul. Biurowa',
        'Francja'
    ]
}

const [id, street2, officeAddress] = getEmployeeWorkInfo(33);
console.log('pracownik:', id, street2, officeAddress,);