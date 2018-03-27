'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});


var accbalSchema = new Schema({
  account: {
    type: Number,
    required: 'Kindly enter the account number',
    unique : true
  },
  balance: {
    type: Number,
    default: 0
  },
  name: {
    type: String
  }
});



module.exports = mongoose.model('Acc', accbalSchema);
//module.exports = mongoose.model('Tasks', TaskSchema);
