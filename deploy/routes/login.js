let User = require('../models/UserModel');
var express = require('express');
var router = express.Router();

const AuthController = require('../controllers/AuthController');
const CrosMiddleWare = require('../middleware/CorsMiddleWare');
// mother route is /login

//router.use(CrosMiddleWare.allowCrossDomain);
router.post("/", AuthController.login);

// router.get("/", function(req, res, next) {
//     console.log(req.body);
//     //AuthController.login(req, res);
// })
router.post("/refresh-token", AuthController.refreshToken);


/* POST Login listing. */
// router.post('/', function(req, res, next) {
//     //res.send('respond with a resource');
//     //let user = new User(1, 2);
//     let email    = req.body.email;
//     let password = req.body.password;

//     console.log(email + ' ' + password);
//     // let result = User.getUserWithEmailAndPassword(function(resultQuery) {
//     //   res.json(resultQuery);
//     // });
    
// });
  
module.exports = router;