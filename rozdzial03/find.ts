const items = [
    { name: 'Jan', age: 20 },
    { name: 'Linda', age: 22 },
    { name: 'Jan', age: 40}
]

const jon = items.find((item) => {
    return item.name === 'Jan'
});
console.log(jon);