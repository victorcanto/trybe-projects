db.voos.findOne(
  { 
    litrosCombustivel: { $lte: 600, $exists: true }, 
    "empresa.nome": { $nin: ["GOL", "AZUL"] }, 
  }, 
  { vooId: 1, 
    "empresa.nome": 1,
     litrosCombustivel: 1, 
     _id: 0, 
  },
);
