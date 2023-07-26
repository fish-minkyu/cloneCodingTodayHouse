const dotenv = require('dotenv');
dotenv.config();

const development = {
  username: 'root',
  password: '4321aaaa',
  database: 'house_db',
  host: 'house-database.cegizh8rodio.ap-northeast-2.rds.amazonaws.com',
  dialect: 'mysql',
};
const test = {
  username: 'root',
  password: null,
  database: 'database_test',
  host: '127.0.0.1',
  dialect: 'mysql',
};
const production = {
  username: 'root',
  password: null,
  database: 'database_production',
  host: '127.0.0.1',
  dialect: 'mysql',
};

module.exports = { development, test, production };
