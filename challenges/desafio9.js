db.trips.aggregate([
  {
    $match: {
      birthYear: {
        $ne: "",
        $exists: true,
      },
    },
  },
  {
    $group: {
      _id: null,
      maiorAnoNascimento: { $max: { $toInt: "$birthYear" } },
      menorAnoNascimento: { $min: { $toInt: "$birthYear" } },
    },
  },
  {
    $project: {
      maiorAnoNascimento: 1,
      menorAnoNascimento: 1,
      _id: 0,
    },
  },
]);

// Source Ref
// https://docs.mongodb.com/manual/reference/operator/aggregation/toInt/
