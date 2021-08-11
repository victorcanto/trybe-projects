db.voos.findOne({ "passageiros.pagos": { $gt: 7000 } }, { vooId: 1, mes: 1, ano: 1, _id: 0 });
