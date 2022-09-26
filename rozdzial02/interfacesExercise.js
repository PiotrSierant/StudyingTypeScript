var piotr = {
    name: "Piotr",
    id: 1,
    isManager: true,
    getUniqueId: function () {
        var uniqueId = "".concat(piotr.id, "-").concat(piotr.name);
        if (piotr.isManager) {
            return "kier-".concat(uniqueId);
        }
        return uniqueId;
    }
};
console.log(piotr.getUniqueId());
var patrycja = {
    name: 'Patrycja',
    id: 2,
    isManager: false,
    getUniqueId: function () {
        var uniqueId = "".concat(patrycja.id, "-").concat(patrycja.name);
        if (!patrycja.isManager) {
            return "prc-".concat(uniqueId);
        }
        return uniqueId;
    }
};
console.log(patrycja.getUniqueId());
