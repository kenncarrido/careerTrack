const prisma = require("../prisma/prisma");

const getJobs = async (req, res) => {
  try {
    const jobs = await prisma.job.findMany();
    res.json(jobs);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Something went wrong.",
    });
  }
};

const createJob = async (req, res) => {
  try {
    const { company, position, status } = req.body;

    const job = await prisma.job.create({
      data: {
        company,
        position,
        status,
      },
    });

    res.status(201).json(job);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Something went wrong.",
    });
  }
};

const updateJob = async (req, res) => {
    const id = parseInt(req.params.id);
    const { company, position, status } = req.body;

    try {
        const job = await prisma.job.update({
            where: { id },
            data: {
                company,
                position,
                status,
            },
        });

        res.json(job);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Something went wrong.",
        });
    }
};

module.exports = {
  getJobs,
  createJob,
  updateJob,
};