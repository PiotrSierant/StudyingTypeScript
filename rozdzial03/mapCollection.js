const mappedEmp = new Map();
mappedEmp.set("Linda", { fullName: 'Linda Kowalsky', id: 1 });
mappedEmp.set("Kuba", { fullName: 'Kuba Tomaszewski', id: 2 });
mappedEmp.set("Pamela", { fullName: 'Pamela Kluczyk', id: 4 });

console.log(mappedEmp);
console.log('get', mappedEmp.get("Kuba"));
console.log('size', mappedEmp.size);

for (let [key, val] of mappedEmp) {
    console.log('iteracja:', key, val);
}
for (let obj of mappedEmp) {
    console.log('iteracja:', obj);
}