let User = require('../models/UserModel');
const AuthMiddleWare = require('../middleware/AuthMiddleWare');
const UserController = require('../controllers/UserController');
//const CrosMiddleWare = require('../middleware/CorsMiddleWare');
var cors = require('cors')
var express = require('express');
var router = express.Router();

//router.use(cors);
//router.use(AuthMiddleWare.isAuth);


/* GET users listing. */
router.get('/get-user-infor', function(req, res, next) {
  console.log('ok ok');
  //res.send('respond with a resource');
  //let user = new User(1, 2);
  let result = User.getAll(function(resultQuery) {
    res.json(resultQuery);
  });
  
});   

router.post('/find-blog-aboutme', UserController.findBlogAboutmeById);

router.post('/find-allcourse-by-profileurl', UserController.findAllCourseByProfileUrl);

router.post('/find-allvideo-by-profileurl', UserController.findAllVideoByProfileUrl);

router.post('/update-blog-aboutme/:userid', UserController.updateBlogAboutmeById);

router.post('/insert-blog-aboutme/:userid', UserController.insertBlogAboutmeById);

router.post('/:profileurl', UserController.findProfileDataByProfileUrl);



module.exports = router;
