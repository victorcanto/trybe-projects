db.air_alliances.aggregate([
  {
    $lookup: {
      from: "air_routes",
      localField: "airlines",
      foreignField: "airline.name",
      let: { alliance_name: "$name" },
      pipeline: [
        {
          $match: {
            airplane: { $in: ["747", "380"] },
          },
        },
        {
          $group: {
            _id: "$$alliance_name",
            totalRotas: { $sum: 1 },
          },
        },
      ],
      as: "parcerias",
    },
  },
  {
    $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ["$parcerias", 0] }, "$$ROOT"] } },
  },
  { $sort: { "parcerias.totalRotas": -1 } },
  { $limit: 1 },
  {
    $project: {
      _id: "$name",
      totalRotas: "$totalRotas",
    },
  },
]);

// Source Ref:
// https://docs.mongodb.com/manual/reference/operator/aggregation/mergeObjects/#mongodb-expression-exp.-mergeObjects
// https://docs.mongodb.com/manual/reference/operator/aggregation/lookup/
