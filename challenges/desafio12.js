  // Crie uma query que faça em todos os documentos a ordenação dos elementos do array valoresNutricionais pelo campo percentual de forma descendente.
  db.produtos.updateMany(
    {},
    { $push: {
      valoresNutricionais: {
        $each: [],
        $sort: { percentual: -1 },
      },
    } },
  );

  // Crie uma query que retorne o nome e valoresNutricionais de todos os documentos.
  db.produtos.find(
    {},
    { nome: 1, valoresNutricionais: 1, _id: 0 },
  );