const { MongoClient } = require('mongodb');

const client = new MongoClient(process.env.MONGODB_CNN);

const DbConnection = async () => {
  try {
    await client.connect();
    const database = client.db('links');
    const linksDB = database.collection('data');

    await linksDB.createIndex({ expireAt: 1 }, { expireAfterSeconds: 0 });

    const doc = {
      information: 'hello word',
      expireAt: new Date(10000),
    };

    await linksDB.insertOne(doc);
    console.log('ta ok');
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  DbConnection,
};
