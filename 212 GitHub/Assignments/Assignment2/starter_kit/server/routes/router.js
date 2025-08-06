const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');

router.get('/recipe', async (req, res) => {
  const recipes = await Recipe.find();
  res.json(recipes);
});

router.post('/recipe', async (req, res) => {
  const newRecipe = new Recipe(req.body);
  await newRecipe.save();
  res.json({ message: 'Recipe added', recipe: newRecipe });
});

router.get('/recipe/:id', async (req, res) => {
  const recipe = await Recipe.findById(req.params.id);
  res.json(recipe);
});

router.put('/recipe/:id', async (req, res) => {
  const updated = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json({ message: 'Recipe updated', updated });
});

router.delete('/recipe/:id', async (req, res) => {
  await Recipe.findByIdAndDelete(req.params.id);
  res.json({ message: 'Recipe deleted' });
});

module.exports = router;
