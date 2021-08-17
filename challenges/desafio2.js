// Crie uma query que adicione o campo valorUnitario em todos os documentos em que esse campo não existe e atribua a ele o valor "0.00", com o tipo NumberDecimal.
db.produtos.updateMany(
  { valorUnitario: { $exists: false } },
  { $set: {
    valorUnitario: NumberDecimal("0.00"),
  } },
);

// Crie uma query que retorne o nome e valorUnitario de todos os produtos.
db.produtos.find({}, { nome: 1, valorUnitario: 1, _id: 0 });
