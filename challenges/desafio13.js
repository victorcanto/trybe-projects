db.trips.aggregate([
  {
    $match: {
      startTime: { $gte: ISODate("2016-03-10") },
    },
  },
  {
    $group: {
      _id: "null",
      duracaoMedia: {
        $avg: {
          $dateDiff: {
            startDate: "$startTime",
            endDate: "$stopTime",
            unit: "minute",
          },
        },
      },
    },
  },
  {
    $project: {
      duracaoMediaEmMinutos: { $ceil: "$duracaoMedia" },
      _id: 0,
    },
  },
]);

// Source Ref
// https://docs.mongodb.com/manual/reference/operator/aggregation/dateDiff/#mongodb-expression-exp.-dateDiff
