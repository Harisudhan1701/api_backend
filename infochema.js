const mongose = require("mongoose");

const infochema = mongose.Schema({
  Name: {
    type: String,
    required: true,
    trim: true,
  },
  Age: {
    type: Number,
    required: true,
    trim: true,
  },
  City: {
    type: String,
    required: true,
    trim: true,
  },
  create_at: {
    type: Date,
    deafult:Date.now
  },
});


module.exports = mongose.model("",infochema)
