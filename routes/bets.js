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
router.get('/reset', async (req, res) => {
  res.render('reset/betreset')
})

router.delete('/reset', async (req, res) => {
  let documents
  documents = await Bet.deleteMany()
  res.redirect('/bets')
  // try {
  //   author = await Author.findById(req.params.id)
  //   await author.remove()
  //   res.redirect('/authors')
  // } catch {
  //   if (author == null) {
  //     res.redirect('/')
  //   } else {
  //     res.redirect(`/authors/${author.id}`)
  //   }
  // }
})

module.exports = router