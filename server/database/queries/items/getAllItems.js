const connection = require('../../config/connection');

const getAllItems = ({ limit, offset }) => {
  const sql = {
    text: 'SELECT * FROM items LIMIT $1 OFFSET $2',
    values: [limit, offset],
  };
  return connection.query(sql);
};

module.exports = getAllItems;
