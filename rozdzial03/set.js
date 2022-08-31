const userIds = [
    1,2,1,3
]

const uniqueIds = new Set(userIds);
console.log(uniqueIds);

uniqueIds.add(10);
console.log('Po dodaniu 10', uniqueIds);

console.log('Czy zawiera', uniqueIds.has(3));

console.log('Liczba elementów', uniqueIds.size);

for (let item of uniqueIds) {
    console.log('iteracja:', item);
}