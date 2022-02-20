const { object, string } = require('yup');

const { boomify } = require('../../utils');

const addItemValidation = async (req, res, next) => {
  try {
    const addItemSchema = object().shape({
      name: string().min(4, 'name must be at least 4 char')
        .required(),
      description: string()
        .min(8, 'description must be at least 8 char')
        .required('description is required'),
    });

    await addItemSchema.validate(req.body, {
      abortEarly: false,
    });
    next();
  } catch (error) {
    next(boomify(400, error.errors[0]));
  }
};

module.exports = addItemValidation;
