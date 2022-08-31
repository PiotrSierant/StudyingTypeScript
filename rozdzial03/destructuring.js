function getEmployee(id) {
    return {
        name: 'Jan',
        age: 35,
        address: 'Skryptów Wsadowych 123',
        country: 'Polska'
    }
}

const { name: fullName, age } = getEmployee(22);
console.log('pracownik:', fullName, age);


function getEmployeeWorkInfo(id) {
    return [
        id,
        'ul. Biurowa',
        'Francja'
    ]
}

const [id, officeAddress] = getEmployeeWorkInfo(33);
console.log('pracownik:', id, officeAddress);