db.voos.findOne({ litrosCombustivel: { $gte: 1000 } }, { vooId: 1, _id: 0 });
