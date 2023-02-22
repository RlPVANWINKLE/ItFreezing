const express = require('express')
const router = express.Router()
const Bet = require('../models/bet')
const Count = require('../models/Count')

router.put('/reset', async (req, res) => {
  //let bet = await Bet.find();
  await Bet.deleteMany();
  let count
  res.redirect(`/count/`)

})

module.exports = router