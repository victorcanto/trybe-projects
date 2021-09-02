const { HTTP_BAD_REQUEST_STATUS } = require('../constants');

function authName(req, res, next) {
  const { name } = req.body;
  if (!name) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json({
      message: 'O campo "name" é obrigatório',
    });
  }

  const nameIsValid = name.length >= 3;

  if (!nameIsValid) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json({
      message: 'O "name" deve ter pelo menos 3 caracteres',
    });
  }

  next();
}

function authAge(req, res, next) {
  const { age } = req.body;
  if (!age) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json({
      message: 'O campo "age" é obrigatório',
    });
  }

  const ageIsValid = Number.isInteger(age) && age >= 18;

  if (!ageIsValid) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json({
      message: 'A pessoa palestrante deve ser maior de idade',
    });
  }

  next();
}

function authWatchedAt(req, res, next) {
  const { talk: { watchedAt } } = req.body;

  if (!watchedAt) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json({
      message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
    });
  }

  const regex = /^(0?[1-9]|[12][0-9]|3[01])[\\/\\-](0?[1-9]|1[012])[\\/\\-]\d{4}$/;

  const watchedAtIsValid = regex.test(watchedAt);

  if (!watchedAtIsValid) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json({
      message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
    });
  }
  next();
}

function authRate(req, res, next) {
  const { talk: { rate } } = req.body;
  const rateNotExists = rate === undefined || rate === null;

  if (rateNotExists) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json({
      message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
    });
  }

  const rateIsValid = rate > 0 && rate < 6;

  if (!rateIsValid) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json({
      message: 'O campo "rate" deve ser um inteiro de 1 à 5',
    });
  }

  next();
}

function authTalk(req, res, next) {
  const { talk } = req.body;

  if (!talk) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json({
      message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
    });
  }
  next();
}

const authTalker = [
  authName,
  authAge,
  authTalk,
  authWatchedAt,
  authRate,
];

module.exports = { authTalker };

// Source Ref
// Regex validate Date : https://stackoverflow.com/questions/5465375/javascript-date-regex-dd-mm-yyyy
// Express: https://expressjs.com/en/guide/using-middleware.html#middleware.router