const { request } = require('express');
const { response } = require('express');
const { validationResult } = require('express-validator');
const { client } = require('../database/config');
const { random, timeSelection } = require('../helpers/index.helpers');

const collection = client.db('links').collection('data');

const linkPost = async (req = request, res = response) => {
  const { information, time } = req.body;
  const errors = validationResult(req);

  try {
    if (!errors.isEmpty()) return res.status(400).json(errors);

    const timeResult = await timeSelection(time);
    const url = random(16);

    await collection.insertOne({
      url,
      information,
      expireAt: new Date(timeResult),
    });

    return res.json({
      status: 'ok',
      information,
      url,
    });
  } catch (err) {
    res.status(400).json({ err });
  }
};

const linkGet = async (req = request, res = response) => {
  const { params } = req;

  const result = await collection.findOne(params);

  if (!result) return res.status(400).json({ error: 'The URL not exist' });

  return res.json({
    result,
  });
};

module.exports = {
  linkPost,
  linkGet,
};
