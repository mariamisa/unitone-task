const router = require('express').Router();

const {
  getItems,
  addItem,
  getItemsById,
} = require('../controller');
const {
  addItem: addItemValidation,
} = require('../middleware/validation');

router.get('/items', getItems);
router.get('/items/:id', getItemsById);
router.post('/items', addItemValidation, addItem);

module.exports = router;
