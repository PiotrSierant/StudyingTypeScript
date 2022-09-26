interface EmployeeExercice {
    name: string;
    id: number;
    isManager: boolean;
    getUniqueId: () => string;
}

const piotr: EmployeeExercice = {
    name: "Piotr",
    id: 1,
    isManager: true,
    getUniqueId: (): string => {
        let uniqueId = `${piotr.id}-${piotr.name}`;
        if (piotr.isManager) {
            return `kier-${uniqueId}`;
        }
        return uniqueId;
    }
}
console.log(piotr.getUniqueId());

const patrycja: EmployeeExercice = {
    name: 'Patrycja',
    id: 2,
    isManager: false,
    getUniqueId: (): string => {
        let uniqueId = `${patrycja.id}-${patrycja.name}`;
        if (!patrycja.isManager) {
            return `prc-${uniqueId}`;
        }
        return uniqueId;
    }
}
console.log(patrycja.getUniqueId());
