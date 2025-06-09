
use mongo_apoyo;

db.ayuda.insertMany([
  {
    name: "igual_estricto",
    type: "comparativo",
    description: "Verifica si el valor del campo coincide exactamente con el valor dado.",
    example: "campoX debe ser igual a 100",
    syntax: "{ campoX: { $eq: 100 } }",
    queries: [
      "db.ayuda.findOne({ name: 'igual_estricto' })"
    ]
  },
  {
    name: "diferente",
    type: "comparativo",
    description: "Evalúa si el campo tiene un valor distinto al proporcionado.",
    example: "campoX diferente de 'admin'",
    syntax: "{ campoX: { $ne: 'admin' } }",
    queries: [
      "db.ayuda.find({ name: 'diferente' })"
    ]
  },
  {
    name: "mayor_exacto",
    type: "comparativo",
    description: "Determina si un valor en el campo es estrictamente mayor.",
    example: "campoY > 50",
    syntax: "{ campoY: { $gt: 50 } }",
    queries: [
      "db.ayuda.findOne({ name: 'mayor_exacto' })"
    ]
  },
  {
    name: "logica_y",
    type: "logico",
    description: "Ambas condiciones dentro del array deben cumplirse.",
    example: "campoA > 0 y campoB < 100",
    syntax: "{ $and: [ { campoA: { $gt: 0 } }, { campoB: { $lt: 100 } } ] }",
    queries: [
      "db.ayuda.find({ name: 'logica_y' })"
    ]
  },
  {
    name: "comparacion_expr",
    type: "expr",
    description: "Comparación entre dos campos usando $expr y $lt.",
    example: "campo1 menor que campo2",
    syntax: '{ $expr: { $lt: ["$campo1", "$campo2"] } }',
    queries: [
      "db.ayuda.findOne({ name: 'comparacion_expr' })"
    ]
  },
  {
    name: "condicion_js",
    type: "javascript",
    description: "Permite evaluar condiciones con JavaScript dentro del documento.",
    example: "suma de campo1 y campo2 mayor a 200",
    syntax: '{ $where: "this.campo1 + this.campo2 > 200" }',
    queries: [
      "db.ayuda.find({ type: 'javascript' })"
    ]
  },
  {
    name: "mixto_avanzado",
    type: "mixto",
    description: "Combina una comparación entre campos con una condición JavaScript.",
    example: "campo1 >= campo2 y campo3 definido",
    syntax:
      '{ $and: [ { $expr: { $gte: ["$campo1", "$campo2"] } }, { $where: "this.campo3 !== undefined" } ] }',
    queries: [
      "db.ayuda.find({ name: 'mixto_avanzado' })"
    ]
  }
]);

// Consultas por categoría
db.ayuda.find({ type: "comparativo" }).pretty();
db.ayuda.find({ type: "logico" }).pretty();
db.ayuda.find({ type: "expr" }).pretty();
db.ayuda.find({ type: "javascript" }).pretty();
db.ayuda.find({ type: "mixto" }).pretty();

// Consulta por nombre de operadores
const operadoresMod = [
  "igual_estricto", "diferente", "mayor_exacto",
  "logica_y", "comparacion_expr",
  "condicion_js", "mixto_avanzado"
];

operadoresMod.forEach(op => {
  print(`Consultando operador modificado: ${op}`);
  printjson(db.ayuda.find({ name: op }).toArray());
});
