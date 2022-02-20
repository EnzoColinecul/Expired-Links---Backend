const { response } = require('express');

const linkPost = (req, res = response) => {
  res.json({
    status: 'ok',
    url: '1aWc13Adf',
  });
};

module.exports = {
  linkPost,
};
