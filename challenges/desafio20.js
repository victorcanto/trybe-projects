db.voos.findOne({ rtk: { $exists: false } }, { vooId: 1, _id: 0 });
