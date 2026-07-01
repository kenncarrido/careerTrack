const express = require("express");

const router = express.Router();

const {
  getJobs,
  createJob,
    updateJob,
} = require("../controllers/jobController");

router.get("/", getJobs);

router.post("/", createJob);

router.put("/:id", updateJob);

module.exports = router;