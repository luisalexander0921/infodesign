const { Router } = require("express");
const router = Router();
//const middleware = require("../config/middleware");
const GetHistoricalController = require("../controllers/GetHistoricalController");

//METODO LISTAR//
router.post("/historical/", GetHistoricalController.list);

module.exports = router;
