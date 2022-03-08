const { request } = require('express');
const { response } = require('express');
const { client } = require('../database/config');
const { random } = require('../helpers/index.helpers');

const collection = client.db('links').collection('data');

const linkPost = async (req = request, res = response) => {
  const { information } = req.body;

  const url = random(16);

  await collection.insertOne({
    url,
    information,
    expireAt: '1',
  });

  res.json({
    status: 'ok',
    information,
    url,
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
