var items = [
    { name: 'Jan', age: 20 },
    { name: 'Linda', age: 22 },
    { name: 'Jan', age: 40 }
];
var jon = items.find(function (item) {
    return item.name === 'Jan';
});
console.log(jon);
