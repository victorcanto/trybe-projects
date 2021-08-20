db.movies.aggregate([
  {
    $match: {
      awards: {
        $exists: true,
        $in: [/^Won...Oscar/m, /^Won...Oscars/m],
      },
    },
  },
  {
    $group: {
      _id: null,
      maior_rating: { $max: "$imdb.rating" },
      menor_rating: { $min: "$imdb.rating" },
      media_rating: { $avg: "$imdb.rating" },
      desvio_padrao: { $stdDevSamp: "$imdb.rating" },
    },
  },
  {
    $project: {
      maior_rating: "$maior_rating",
      menor_rating: "$menor_rating",
      media_rating: { $round: ["$media_rating", 1] },
      desvio_padrao: { $round: ["$desvio_padrao", 1] },
      _id: 0,
    },
  },
]);

// Source ref:
// https://docs.mongodb.com/manual/reference/operator/query/regex/
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions
