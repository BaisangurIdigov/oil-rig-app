const Rig = require("../models/OilRig.model");

const controllers = {
  getRigs: async (req, res) => {
    try {
      const rig = await Rig.aggregate([
        {
          $lookup: {
            from: "notes",
            as: "text",
            let: { rig: "$_id" },
            pipeline: [{ $match: { $expr: { $eq: ["$rig", "$$rig"] } } }],
          },
        },
        {
          $lookup: {
            from: "notes",
            as: "lastNotes",
            let: { rig: "$_id" },
            pipeline: [
              { $match: { $expr: { $eq: ["$rig", "$$rig"] } } },
              { $sort: { createdAt: -1 } },
              { $limit: 1 },
            ],
          },
        },
        {
          $project: {
            _id: 1,
            title: 1,
            img: 1,
            text: 1,
            lastNotes: 1,
          },
        },
        { $unwind: { path: "$lastNotes", preserveNullAndEmptyArrays: true } },
      ]);
      res.json(rig);
    } catch (e) {
      console.log(e);
    }
  },
  getRigsById: async (req, res) => {
    try {
      const {id} = req.params
      const rig = await Rig.findById({ id });
      res.json(rig);
    } catch (e) {
      console.log(e);
    }
  },
  postRigs: async (req, res) => {
    try {
      const {img, title} = req.body
      const rig = new Rig({ img, title });
      await rig.save();
      res.json(rig);
    } catch (e) {
      console.log(e);
    }
  },
  patchRigs: async (req, res) => {
    try {
      const {id} = req.params
      const {img, title} = req.body
      const rig = await Rig.findByIdAndUpdate(id, { img, title }, {
        new: true,
      });
      res.json(rig);
    } catch (e) {
      console.log(e);
    }
  },
  deleteRigs: async (req, res) => {
    try {
      const {id} = req.params
      const rig = await Rig.findByIdAndDelete({ id });
      res.json(rig);
    } catch (e) {
      console.log(e);
    }
  },
};

module.exports = controllers;
