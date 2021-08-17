// // Crie uma query que faça a criação de um índice do tipo text no campo descricao com o idioma padrão portuguese.
db.produtos.createIndex(
  { descricao: "text" },
  { default_language: "portuguese" },
);

// Crie uma query que retorne a quantidade de documentos que contêm as palavras frango e hamburguer utilizando o operador $text.
db.produtos.count(
  { $text: {
    $search: "frango hamburguer", 
  } },
);

// Source code ref: 
// https://docs.mongodb.com/manual/tutorial/specify-language-for-text-index/#specify-the-default-language-for-a-text-index