db.movies.aggregate([
  {
    $match: {
      "imdb.rating": { $gte: 7 },
      genres: { $nin: ["Crime", "Horror"] },
      rated: { $in: ["PG", "G"] },
      languages: {
        $exists: true,
        $all: ["English", "Spanish"],
      },
    },
  },
]);
