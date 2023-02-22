const mongoose = require('mongoose')

const betSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  bet: {
    type: Number
  }
})


module.exports = mongoose.model('Bet', betSchema)
