
[
  {
    "id": "igual_valor",
    "info": "Comprueba si un campo es igual a un valor específico.",
    "example": "campoX debe ser exactamente 42.",
    "form": "{ campoX: { $eq: 42 } }",
    "category": "comparativo"
  },
  {
    "id": "no_igual",
    "info": "Verifica que el valor del campo no coincida con uno dado.",
    "example": "campoX diferente de 'activo'.",
    "form": "{ campoX: { $ne: 'activo' } }",
    "category": "comparativo"
  },
  {
    "id": "mayor_que",
    "info": "Evalúa si el valor de un campo supera un umbral.",
    "example": "campoA > 30.",
    "form": "{ campoA: { $gt: 30 } }",
    "category": "comparativo"
  },
  {
    "id": "menor_o_igual",
    "info": "Verifica si un campo es igual o menor a un valor.",
    "example": "campoB ≤ 20.",
    "form": "{ campoB: { $lte: 20 } }",
    "category": "comparativo"
  },
  {
    "id": "incluido_en_lista",
    "info": "Determina si el valor del campo pertenece a un conjunto.",
    "example": "campoZ es uno de [\"A\", \"B\", \"C\"].",
    "form": "{ campoZ: { $in: [\"A\", \"B\", \"C\"] } }",
    "category": "comparativo"
  },
  {
    "id": "fuera_de_lista",
    "info": "Asegura que el campo no contenga valores específicos.",
    "example": "campoY no es ninguno de [1, 2, 3].",
    "form": "{ campoY: { $nin: [1, 2, 3] } }",
    "category": "comparativo"
  },
  {
    "id": "condiciones_todas",
    "info": "Todas las condiciones agrupadas deben ser verdaderas.",
    "example": "campo1 > 5 y campo2 ≠ null.",
    "form": "{ $and: [ { campo1: { $gt: 5 } }, { campo2: { $ne: null } } ] }",
    "category": "logico"
  },
  {
    "id": "condiciones_alguna",
    "info": "Al menos una condición debe cumplirse.",
    "example": "campoA = 10 o campoB > 20.",
    "form": "{ $or: [ { campoA: 10 }, { campoB: { $gt: 20 } } ] }",
    "category": "logico"
  },
  {
    "id": "negacion_simple",
    "info": "Niega una condición concreta.",
    "example": "campo1 no mayor que 50.",
    "form": "{ campo1: { $not: { $gt: 50 } } }",
    "category": "logico"
  },
  {
    "id": "ninguna_valida",
    "info": "Todas las condiciones deben ser falsas.",
    "example": "campoX ≠ 1 y campoY ≠ 2.",
    "form": "{ $nor: [ { campoX: 1 }, { campoY: 2 } ] }",
    "category": "logico"
  },
  {
    "id": "expr_igualdad",
    "info": "Usa $expr para comparar igualdad entre campos.",
    "example": "campoA == campoB.",
    "form": "{ $expr: { $eq: [\"$campoA\", \"$campoB\"] } }",
    "category": "expr"
  },
  {
    "id": "expr_menor_que",
    "info": "Verifica que un campo sea menor que otro con $expr.",
    "example": "campo1 < campo2.",
    "form": "{ $expr: { $lt: [\"$campo1\", \"$campo2\"] } }",
    "category": "expr"
  },
  {
    "id": "expr_negado",
    "info": "Niega una expresión entre campos.",
    "example": "campo2 no debe superar a campo3.",
    "form": "{ campo2: { $not: { $expr: { $gt: [\"$campo2\", \"$campo3\"] } } } }",
    "category": "expr"
  },
  {
    "id": "condicion_personalizada",
    "info": "Permite evaluar una condición compleja con JavaScript.",
    "example": "campoA + campoB debe ser mayor que 150.",
    "form": "{ $where: \"this.campoA + this.campoB > 150\" }",
    "category": "javascript"
  },
  {
    "id": "negar_js",
    "info": "Niega una condición definida mediante JavaScript.",
    "example": "campo1 no debe ser menor que 25.",
    "form": "{ campo1: { $not: { $where: \"this.campo1 < 25\" } } }",
    "category": "javascript"
  },
  {
    "id": "nor_con_js",
    "info": "Ninguna de las condiciones, incluidas en JS, puede cumplirse.",
    "example": "campo1 ≠ 0 y campo2 distinto de 'baja'.",
    "form": "{ $nor: [ { campo1: 0 }, { $where: \"this.campo2 == 'baja'\" } ] }",
    "category": "javascript"
  },
  {
    "id": "mixto_expr_js",
    "info": "Combina comparaciones con $expr y JavaScript.",
    "example": "campo1 ≥ campo2 y campo3 definido.",
    "form": "{ $and: [ { $expr: { $gte: [\"$campo1\", \"$campo2\"] } }, { $where: \"this.campo3 !== null\" } ] }",
    "category": "mixto"
  },
  {
    "id": "condicion_mixta",
    "info": "Incluye lógica booleana y evaluación JS.",
    "example": "campoX = 'admin' y campoY < 1000.",
    "form": "{ $and: [ { campoX: 'admin' }, { $where: \"this.campoY < 1000\" } ] }",
    "category": "mixto"
  }
]
