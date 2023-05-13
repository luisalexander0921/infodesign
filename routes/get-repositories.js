const { Router } = require("express");
const router = Router();
//const middleware = require("../config/middleware");
const GetRepositoriesController = require("../controllers/GetRepositoriesController");

//METODO LISTAR//
router.get("/repos-google", GetRepositoriesController.list);

module.exports = router;
