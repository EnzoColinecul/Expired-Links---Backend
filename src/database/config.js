const { MongoClient } = require('mongodb');

const client = new MongoClient(process.env.MONGODB_CNN);

const DbConnection = async () => {
  try {
    await client.connect();
    const database = client.db('links').collection('data');
    await database.createIndex({ expireAt: 1 }, { expireAfterSeconds: 0 });

    const time = new Date();
    const doc = {
      information: 'hello word 2',
      expireAt: new Date(time.setMinutes(time.getMinutes() + 5)),
    };

    await database.insertOne(doc);
    console.log('ta ok');
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  DbConnection,
};
