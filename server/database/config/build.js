const { readFileSync } = require('fs');
const { join } = require('path');

const connection = require('./connection');

const build = () => {
  const sqlSchema = readFileSync(join(__dirname, './build.sql')).toString();
  return connection.query(sqlSchema);
};

module.exports = build;
