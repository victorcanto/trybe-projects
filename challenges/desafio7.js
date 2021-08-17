// Crie uma query que faça a remoção do item cebola em todos os sanduíches.
db.produtos.updateMany(
  {},
  { $pull: {
    ingredientes: "cebola",
  } },
);

// Crie uma query que retorne o nome e ingredientes de todos os documentos.
db.produtos.find(
  {},
  { nome: 1, ingredientes: 1, _id: 0 },
);