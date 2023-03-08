const express = require('express')
const router = express.Router()
const Bet = require('../models/bet')

router.get('/', async (req, res) => {
  let bet
  try {
    bet = await Bet.find()
  } catch {
    bet = []
  }
  res.render('index', { bet: bet })
})

module.exports = router