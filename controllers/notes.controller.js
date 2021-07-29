const Note = require("../models/Note.model");

const controllers = {
  getNotesAll: async (req, res) => {
    try {
      const notes = await Note.find();
      res.json(notes);
    } catch (e) {
      console.log(e);
    }
  },
  getNotesByRig: async (req, res) => {
    try {
      const { id } = req.params
      const notes = await Note.find({rig: id});
      res.json(notes);
    } catch (e) {
      console.log(e);
    }
  },
  postNotes: async (req, res) => {
    try {
      const { text, rig, status } = req.body
      const notes = new Note({ text, rig, status });
      await notes.save();
      res.json(notes);
    } catch (e) {
      console.log(e);
    }
  },
  patchNotes: async (req, res) => {
    try {
      const { id } = req.params
      const { text, status } = req.body
      const notes = await Note.findByIdAndUpdate(id, { text, status } , {
        new: true,
      });
      res.json(notes);
    } catch (e) {
      console.log(e);
    }
  },
  deleteNotes: async (req, res) => {
    try {
      const { id } = req.params
      const notes = await Note.findByIdAndDelete({ id });
      res.json(notes);
    } catch (e) {
      console.log(e);
    }
  },
};

module.exports = controllers;
