const { addNewItem } = require('../../database/queries');

const addItem = async (req, res, next) => {
  try {
    const {
      name,
      description,
    } = req.body;

    await addNewItem({ name, description });

    res.status(200).json({
      statusCode: 200,
      message: 'Item added successfully',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = addItem;
