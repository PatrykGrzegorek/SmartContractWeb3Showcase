const express = require("express");
const router = express.Router();
const {
  getMyContract,
  updateMyContract,
} = require("../controllers/myContract.controller.js");

router.get("/", getMyContract);

router.post("/", updateMyContract);

module.exports = router;
