// define all your routes for cake model here
//by matching/configuring them against the controller functions for the same model

const router = require('express').Router()

//get the Controller functions
const cakeController = require('../controllers/cake.controller')

router.get('/test', cakeController.test);

router.get('/all',cakeController.getAllCakes)
router.get('/:id',cakeController.cakeById)
router.post('/add',cakeController.addCake);
 router.delete('/remove/:id',cakeController.removeCake);
router.put('/edit/:id',cakeController.editCakeDetails);





module.exports = router;