const JobBoard = require("../models/model");

exports.getAllJobBoard = (req, res) => {
    JobBoard.find()
        .then((job) => res.json(job))
        .catch((err) =>
            res
                .status(404)
                .json({ message: "JobBoard not found", error: err.message })
        );
};

exports.postCreateJobBoard = (req, res) => {
    JobBoard.create(req.body)
        .then((data) => res.json({ message: "JobBoard added successfully", data }))
        .catch((err) =>
            res
                .status(400)
                .json({ message: "Failed to add job", error: err.message })
        );
};

exports.putUpdateJobBoard = (req, res) => {
    JobBoard.findByIdAndUpdate(req.params.id, req.body)
        .then((data) => res.json({ message: "updated successfully", data }))
        .catch((err) =>
            res
                .status(400)
                .json({ message: "Failed to update job", error: err.message })
        );
};

exports.deleteJobBoard = (req, res) => {
    JobBoard.findByIdAndRemove(req.params.id, req.body)
        .then((data) =>
            res.json({ message: "job deleted successfully", data })
        )
        .catch((err) =>
            res
                .status(404)
                .json({ message: "book not found", error: err.message })
        );
};