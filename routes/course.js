let User = require('../models/UserModel');
const AuthMiddleWare = require('../middleware/AuthMiddleWare');
const PostStatusController = require('../controllers/PostStatusController');
const CourseController = require('../controllers/CourseController');
//const CrosMiddleWare = require('../middleware/CorsMiddleWare');
var cors = require('cors')
var multer = require('multer');
var express = require('express');
var router = express.Router();

var filename = "";
let storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, './public/images')
    },
    filename: function(req, file, cb) {
      filename = Date.now() + file.originalname
      cb(null, filename);
    }
});

let upload = multer({storage: storage});

router.post('/get-allcourse', CourseController.findAllCourse);

router.post('/get-course-infor-by-course-id', CourseController.findCourseInforByCourseId);

router.post('/insert-course', upload.single("file"), function(req, res) {
    CourseController.insertCourse(req, res, filename);
});

module.exports = router;