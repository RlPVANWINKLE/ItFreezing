const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  Username: {
    type: String,
    required: true
  },
  Password:{
    type: string,
    required: true
  },
  Accounts: [{type:mongoose.Schema.Types.ObjectId, ref: 'Accounts', default:''}],
})


module.exports = mongoose.model('Users', UserSchema)
