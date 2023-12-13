let express = require('express');
let router = express.Router();
let controller = require('../controllers/controller');

router.post('/', function(req,res){
    controller.postDog(req,res);
});

router.get('/', (req,res)=>{
    controller.getAllDogs(req,res);
});

router.delete('/', (req,res)=>{
    controller.getAllDogs(req,res);
});


module.exports = router;