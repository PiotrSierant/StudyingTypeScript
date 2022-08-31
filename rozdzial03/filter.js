var filterItems = [
    { name: 'Jan', age: 20 },
    { name: 'Linda', age: 22 },
    { name: 'Jan', age: 40 }
];
var results = filterItems.filter(function (item, index) {
    console.log(index);
    return item.name === 'Jan';
});
console.log(results);
