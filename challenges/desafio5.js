db.voos.find({}, { vooId: 1, _id: 0 }).limit(3).skip(9);
