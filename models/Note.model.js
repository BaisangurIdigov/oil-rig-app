const { Schema, model } = require('mongoose');

const noteSchema = new Schema(
  {
    text: {
      type: String,
    },
    rig: {
      type: Schema.Types.ObjectId,
      ref: 'rig',
    },
    status: {
      type: Schema.Types.ObjectId,
      ref: 'Status',
    },
  },
  { timestamps: true }
);

const Note = model('Note', noteSchema);
module.exports = Note;
