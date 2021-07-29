const { Schema, model } = require('mongoose');

const statusSchema = new Schema(
  {
    title: {
      type: String,
    },
    color: {
      type: String
    }
  },
  { timestamps: true }
);
const Status = model('Status', statusSchema);
module.exports = Status;
