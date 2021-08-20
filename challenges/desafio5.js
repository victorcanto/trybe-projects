const actorList = [
  "Sandra Bullock",
  "Tom Hanks",
  "Julia Roberts",
  "Kevin Spacey",
  "George Clooney",
];

db.movies.aggregate([
  {
    $match: {
      countries: "USA",
      "tomatoes.viewer.rating": { $gte: 3 },
      cast: { $exists: true },
    },
  },
  {
    $addFields: {
      num_favs: {
        $size: {
          $setIntersection: [actorList, "$cast"],
        },
      },
    },
  },
  {
    $sort: {
      num_favs: -1,
      "tomatoes.viewer.rating": -1,
      title: -1,
    },
  },
  { $limit: 25 },
  { $skip: 24 },
  { $project: { title: 1, _id: 0 } },
]);

// Source ref:
// https://docs.mongodb.com/manual/reference/operator/aggregation/size/
// https://docs.mongodb.com/manual/reference/operator/aggregation/setIntersection/#mongodb-expression-exp.-setIntersection
// https://docs.mongodb.com/manual/reference/operator/aggregation/skip/#mongodb-pipeline-pipe.-skip
