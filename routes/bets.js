const express = require('express')
const router = express.Router()
const Bet = require('../models/bet')
const Count = require('../models/Count')
const imageMimeTypes = ['image/jpeg', 'image/png', 'images/gif']

// All Books Route
router.get('/', async (req, res) => {
  let query = Bet.find()
  const bets = await query.exec()
  res.render('bet/index', {
    bets:bets
  })
})

// New Book Route
router.get('/new', async (req, res) => {
  res.render('bet/new')
})

// Create Book Route
router.post('/', async (req, res) => {
  const bet = new Bet({
    name: req.body.name,
    bet: req.body.bet
  })
    const newBet = await bet.save()
    // res.redirect(`books/${newBook.id}`)
    res.redirect('bets');

})

module.exports = router