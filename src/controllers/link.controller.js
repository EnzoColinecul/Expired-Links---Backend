const { response } = require('express');

const linkPost = (req, res = response) => {
  res.json({
    status: 'ok',
    url: '1aWc13Adf',
  });
};

const linkGet = (req, res = response) => {
  res.json({
    msg: 'este es el mensaje',
  });
};

module.exports = {
  linkPost,
  linkGet,
};
