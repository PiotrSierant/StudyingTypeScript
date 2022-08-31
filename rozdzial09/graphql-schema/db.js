"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todos = void 0;
var uuid_1 = require("uuid");
exports.todos = [
    {
        id: uuid_1.v4(),
        title: "Zadanie pierwsze",
        description: "Opis pierwszego zadania",
    },
    {
        id: uuid_1.v4(),
        title: "Zadanie drugie",
        description: "Opis drugiego zadania",
    },
    {
        id: uuid_1.v4(),
        title: "Zadanie trzecie",
    },
];
