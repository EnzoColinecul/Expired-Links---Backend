require('dotenv-flow').config();
const express = require('express');
const cors = require('cors');

const app = express();

const { PORT, NODE_ENV } = process.env;

const main = async () => {
  if (NODE_ENV === 'local') {
    app.use(cors());
  }

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
};

main();
