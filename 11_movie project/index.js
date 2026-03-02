const express = require('express');
const mongoose = require('mongoose');
const Movie = require('./model/movie');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost:27017/movies')
  .then(() => console.log('Connected to MongoDB'))

app.get('/', async (req, res) => {
  const movies = await Movie.find();
  res.render('index', { movies });
});

app.get('/movies/new', (req, res) => {
  res.render('new');
});

app.post('/movies', async (req, res) => {
  const { title, director, releaseYear, genre } = req.body;
  await Movie.create({ title, director, releaseYear, genre });
  res.redirect('/');
});

app.get('/movies/:id/edit', async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  res.render('edit', { movie });
});

app.post('/movies/:id', async (req, res) => {
  const { title, director, releaseYear, genre } = req.body;
  await Movie.findByIdAndUpdate(req.params.id, { title, director, releaseYear, genre });
  res.redirect('/');
});

app.post('/movies/:id/delete', async (req, res) => {
  await Movie.findByIdAndDelete(req.params.id);
  res.redirect('/');
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));