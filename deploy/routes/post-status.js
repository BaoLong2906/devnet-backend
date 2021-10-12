let User = require('../models/UserModel');
const AuthMiddleWare = require('../middleware/AuthMiddleWare');
const PostStatusController = require('../controllers/PostStatusController');
//const CrosMiddleWare = require('../middleware/CorsMiddleWare');
var cors = require('cors')
var multer = require('multer');
var express = require('express');
var router = express.Router();

router.post('/', PostStatusController.findAllPostStatus);

// var storage = multer.diskStorage({
//     destination: function(req)
// });
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


//router.post('/insert-poststatus', PostStatusController.insertPostStatus);
router.post('/get-comment-by-postid', PostStatusController.getCommentByPostId);
router.post('/insert-comment', PostStatusController.insertComment);

router.post('/insert-poststatus', upload.single("file"), function(req, res) {
  // console.log("test 1: " + req.body.dataTextContent);
  // console.log("test 2: " + req.body.userid);
  // console.log("test 3: " + filename);

  PostStatusController.insertPostStatus(req, res, filename);
});

router.post('/demo', upload.single("file"), function(req, res) {
  // console.log(req.file);
  console.log("test 1: " + req.body.datahello);
  console.log("test 2: " + filename);
  console.log("test 3: " + req.files);
  //PostStatusController.uploadImagePostStatus(req.params.postid, filename);
  //res.send("UPLOAD FILE THANH CONG");
});


module.exports = router;