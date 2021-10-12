let User = require('../models/UserModel');
const AuthMiddleWare = require('../middleware/AuthMiddleWare');
const PostStatusController = require('../controllers/PostStatusController');
const VideoController = require('../controllers/VideoController');
//const CrosMiddleWare = require('../middleware/CorsMiddleWare');
var cors = require('cors')
var multer = require('multer');
var express = require('express');
var router = express.Router();

router.post('/find-all-video-incourse-by-courseid/:courseid', VideoController.getAllVideoInforInCourseByCourseId);

router.get('/:courseid/:videoid', VideoController.getVideoAndItsStuff);

router.post('/find-all-comment-invideo-by-videoid/:videoid', VideoController.getAllCommentInVideoByVideoId);

router.post('/insert-comment', VideoController.insertVideoComment);

module.exports = router;