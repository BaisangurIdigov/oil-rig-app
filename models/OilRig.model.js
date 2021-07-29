const { Schema, model } = require('mongoose');

const rigSchema = new Schema(
  {
    img: {
      type: String,
    },
    title: {
      type: String,
    },
  },
  { timestamps: true }
);
const Rig = model('Rig', rigSchema);
module.exports = Rig;
