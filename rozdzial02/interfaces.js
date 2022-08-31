var linda = {
    name: "Linda",
    id: 2,
    isManager: false,
    getUniqueId: function () {
        var uniqueId = linda.id + "-" + linda.name;
        if (!linda.isManager) {
            return "prc-" + uniqueId;
        }
        return uniqueId;
    }
};
console.log(linda.getUniqueId());
var pam = {
    name: "Patrycja",
    id: 1,
    isManager: true,
    getUniqueId: function () {
        var uniqueId = pam.id + "-" + pam.name;
        if (pam.isManager) {
            return "kier-" + uniqueId;
        }
        return uniqueId;
    }
};
console.log(pam.getUniqueId());
