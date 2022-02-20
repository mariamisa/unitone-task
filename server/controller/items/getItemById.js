const { getItemById: getItemByIdQuery } = require('../../database/queries');

const getItemById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const { rows } = await getItemByIdQuery({ id });

    res.status(200).json({
      statusCode: 200,
      data: rows,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getItemById;
