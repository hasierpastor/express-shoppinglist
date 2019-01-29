const express = require('express');
const router = new express.Router();

let shoppingList = [
  { id: 1, name: 'milk', price: 5 },
  { id: 2, name: 'eggs', price: 7 },
  { id: 3, name: 'chicken', price: 12 },
  { id: 4, name: 'avocados', price: 3 },
  { id: 5, name: 'ice cream', price: 10 }
];

let id = 6;
router.get('/items', function(request, response) {
  return response.json(shoppingList);
});

router.get('/items/:id', function(request, response) {
  let item = shoppingList.find(item => item.id === Number(request.params.id));
  return response.json(item);
});

router.post('/items', function(request, response) {
  shoppingList.push({
    id: ++id,
    name: request.body.name,
    price: request.body.price
  });
  return response.json({ message: 'Item added to shopping list' });
});

router.patch('items/:id', function(request, response) {
  let item = shoppingList.find(item => item.id == Number(request.params));
  item.name = request.body.name || item.name;
  item.price = request.body.price || item.price;
  return response.json({ message: 'Updated item' });
});

router.delete('items/:id', function(request, response) {
  let itemIndex = shoppingList.findIndex(
    item => item.id == Number(request.params)
  );
  shoppingList.splice(itemIndex);
  return response.json({ message: 'Deleted item' });
});

module.exports = router;
