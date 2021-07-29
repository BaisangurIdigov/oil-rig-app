const { Router } = require("express");
const controllers = require("../controllers/oilRig.controller");

const router = Router();

router.get("/rigs", controllers.getRigs);
router.get("/rigs/:id", controllers.getRigsById);
router.post("/rigs", controllers.postRigs);
router.patch("/rigs/:id", controllers.patchRigs);
router.delete("/rigs/:id", controllers.deleteRigs);

module.exports = router;
