const { Router } = require("express");
const controllers = require("../controllers/notes.controller");

const router = Router();

router.get("/notes", controllers.getNotesAll);
router.get("/notes/:id", controllers.getNotesByRig);
router.post("/notes", controllers.postNotes);
router.patch("/notes/:id", controllers.patchNotes);
router.delete("/notes/:id", controllers.deleteNotes);

module.exports = router;
