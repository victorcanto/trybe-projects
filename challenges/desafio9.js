// Crie uma query que faça a remoção do último ingrediente no sanduíche Cheddar McMelt.
db.produtos.updateOne(
  { nome: "Cheddar McMelt" },
  { $pop: {
    ingredientes: 1,
  } },
);

// Crie uma query que retorne o nome e ingredientes de todos os documentos.
db.produtos.find(
  {},
  { nome: 1, ingredientes: 1, _id: 0 },
);