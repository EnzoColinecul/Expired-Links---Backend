const { MongoClient } = require('mongodb');

const client = new MongoClient(process.env.MONGODB_CNN);

const DbConnection = async () => {
  try {
    await client.connect();
    console.log('BD online');
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  DbConnection,
  client,
};
