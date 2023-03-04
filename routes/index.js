const express = require('express')
const router = express.Router()
const Account = require('../models/Accounts')

router.get('/', async (req, res) => {
  let accounts
  try {
    accounts = await Account.find().limit(10).exec()
  } catch {
    accounts = []
  }
  // res.render('index', { bet: bet })
  res.send('hello');
})

module.exports = router