const { Router } = require("express");
const controllers = require("../controllers/status.controller");

const router = Router();

router.get("/status", controllers.getStatusAll);
router.get("/status/:id", controllers.getStatusById);
router.post("/status", controllers.postStatus);
router.patch("/status/:id", controllers.patchStatus);
router.delete("/status/:id", controllers.deleteStatus);

module.exports = router;
