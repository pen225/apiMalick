const ConnexionController = require('../controller/connexion.controller');
const router = require('express').Router();

router.get('/', ConnexionController.getform);
router.post('/', ConnexionController.connectUser);

module.exports = router;