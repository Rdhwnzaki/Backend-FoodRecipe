const express = require("express");

const router = express.Router();
const { userController } = require("../controller/users");
const { validate } = require("../helpers/users");
const upload = require("../middleware/upload-video");
const { protect } = require("../middleware/auth");

router.post("/register", validate, userController.insertUsers);
router.post("/login", userController.login);
router.post("/verif", userController.otp);
router.get("/", protect, userController.getDetailUser);
router.put("/update-photo", protect, upload, userController.insertPhoto);
router.put("/update-profile", protect, upload, userController.putProfile);
router.put("/change-password/:id_user", protect, userController.changePassword);
// router.put("/forgot-password", protect, userController.forgotPassword);

module.exports = router;
