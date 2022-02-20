const connection = require('../../config/connection');

const getItemById = ({ id }) => {
  const sql = {
    text: 'SELECT * FROM items WHERE id = $1',
    values: [id],
  };
  return connection.query(sql);
};

module.exports = getItemById;
