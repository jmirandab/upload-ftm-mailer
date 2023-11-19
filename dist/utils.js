"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFieldName = exports.fieldNames = void 0;
const fieldNames = {
    nombre: 'Nombre',
    genero: 'Género',
    telefono: 'Teléfono',
    correo: 'Correo',
    etnia: 'Etnia',
    comunidadLinguistica: 'Comunidad lingüística',
    organizacion: 'Organización',
    comunidad: 'Comunidad',
    municipio: 'Municipio',
    departamento: 'Departamento',
    textarea1: 'Motivo de preocupación como resultado de las siguientes fallas, desatenciones o agravios:',
    textarea2: 'Indicar el nombre de la persona o agencia que causa el problema (empresas contratistas, organizaciones implementadoras, instituciones del estado, personas particulares, técnicos, entre otros.)',
    textarea3: 'Descripción de las consecuencias que derivaron de las fallas o desatenciones del FTM y/u otros socios ejecutores',
    textarea4: 'Listado (si se conoce) de los principios o procedimientos del proyecto que se considera que no se respetaron',
    textarea5: 'Menciones que medidas correctivas y/o que soluciones de remediación y compensación se deberían de llevar a cabo frente a los posibles problemas causados'
};
exports.fieldNames = fieldNames;
function getFieldName(key) {
    return fieldNames[key] || key;
}
exports.getFieldName = getFieldName;
