const { MongoClient } = require('mongodb');

const client = new MongoClient('mongodb+srv://enzocolinecul:Whatdafaq@97@cluster0.klhfi.mongodb.net/linksDB');

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
};
