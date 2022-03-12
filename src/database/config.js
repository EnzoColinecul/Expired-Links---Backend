const { MongoClient } = require('mongodb');

const client = new MongoClient(process.env.MONGODB_CNN);

const DbConnection = async () => {
  try {
    await client.connect();
    await client.db('links').collection('data').createIndex({ expireAt: 1 }, { expireAfterSeconds: 0 });
    console.log('BD online');
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  DbConnection,
  client,
};
