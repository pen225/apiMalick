const router = require('express').Router();
const inscriptionController = require('../controller/inscription.controller');

router.get('/', inscriptionController.getAllUser);
router.post('/', inscriptionController.addUser);
router.delete('/:id', inscriptionController.deleteUser);
router.put('/:id', inscriptionController.updateUser);


module.exports = router;