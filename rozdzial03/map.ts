const employees = [
    { name: "Tomek", id: 1 },
    { name: "Celina", id: 2 },
    { name: "Robert", id: 3 },
]

const elements = employees.map((item, index) => {
    return `<div>${item.id} - ${item.name}</div>`;
});

console.log(elements);