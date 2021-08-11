db.voos.findOne({ litrosCombustivel: { $exists: true } }, { vooId: 1, _id: 0 });
