// Crie uma query que inclua o campo avaliacao do tipo NumberInt e com o valor 0 em todos os documentos da coleção.
db.produtos.updateMany(
  {},
  { $set: {
    avaliacao: NumberInt("0"),
  } },
);

// Crie uma query que incremente o valor do campo avaliacao em 5 em todos os sanduíches de carne do tipo bovino. Dica: utilize como filtro o campo tags.
db.produtos.updateMany(
  { tags: "bovino" },
  { $inc: { avaliacao: 5 } },
);

// Crie uma query que incremente o valor do campo avaliacao em 3 em todos os sanduíches de ave.
db.produtos.updateMany(
  { tags: "ave" },
  { $inc: { avaliacao: 3 } },
);

// Crie uma query que retorne o nome e avaliacao de todos os sanduíches.
db.produtos.find(
  {},
  { nome: 1, avaliacao: 1, _id: 0 },
);