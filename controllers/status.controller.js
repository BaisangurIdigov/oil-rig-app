const Status = require("../models/Status.model");

const controllers = {
  getStatusAll: async (req, res) => {
    try {
      const status = await Status.find();
      res.json(status);
    } catch (e) {
      console.log(e);
    }
  },
  getStatusById: async (req, res) => {
    try {
      const {id} = req.params
      const status = await Status.findById({ id });
      res.json(status);
    } catch (e) {
      console.log(e);
    }
  },
  postStatus: async (req, res) => {
    try {
      const {title, color} = req.body
      const status = new Status({title, color});
      status.save();
      res.json(status);
    } catch (e) {
      console.log(e);
    }
  },
  patchStatus: async (req, res) => {
    try {
      const {id} = req.params
      const {title, color} = req.body
      const status = await Status.findByIdAndUpdate(id, {title, color }, {
        new: true,
      });
      res.json(status);
    } catch (e) {
      console.log(e);
    }
  },
  deleteStatus: async (req, res) => {
    try {
      const {id} = req.params
      const status = await Status.findByIdAndDelete({ id });
      res.json(status);
    } catch (e) {
      console.log(e);
    }
  },
};

module.exports = controllers;
