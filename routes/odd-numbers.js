const { Router } = require("express");
const router = Router();
//const middleware = require("../config/middleware");
const OddNumbersController = require("../controllers/OddNumbersController");

//METODO LISTAR//
router.get("/odd-numbers/:number", OddNumbersController.list);

module.exports = router;
