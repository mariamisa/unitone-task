const connection = require('../../config/connection');

const addNewItem = ({
  name, description,
}) => {
  const sql = {
    text: 'INSERT INTO items (name,description) VALUES ($1, $2) RETURNING id',
    values: [name, description],
  };
  return connection.query(sql);
};

module.exports = addNewItem;
