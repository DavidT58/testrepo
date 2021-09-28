const express = require("express");
const router = express.Router();

var authController = require('../controllers/auth.controller');

router.post('/auth/register', authController.register);
router.post('/auth/login', authController.login);
// router.post('/auth/validate', authController.validate_token);


const {
    getAllJobBoard,
    postCreateJobBoard,
    putUpdateJobBoard,
    deleteJobBoard
} = require("../controllers/controller")

/**
 * @route GET api/job
 * @description get all job
 * @access public
 */
router.get("/", getAllJobBoard);

/**
 * @route POST api/job
 * @description add a new job
 * @access public
 */
router.post("/", postCreateJobBoard);

/**
 * @route PUT api/job/:id
 * @description update job
 * @access public
 */
router.put("/:id", putUpdateJobBoard);

/**
 * @route DELETE api/job/:id
 * @description delete job
 * @access public
 */
router.delete("/:id", deleteJobBoard);

module.exports = router;