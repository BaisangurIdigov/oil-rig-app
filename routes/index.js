const { Router } = require("express");
const router = Router();

router.use(require("./oilRig.route"));
router.use(require("./notes.route"));
router.use(require("./status.route"));

module.exports = router;
