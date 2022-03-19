const express = require('express');
const router = express.Router();
const { verifyApiHeaderToken } = require('./headerVerifyMiddleware');
const {passport, jwtMiddleware} = require('./seguridad/jwtHelper');

const preguntasRoutes = require('./preguntas/preguntas');
const seguridadRoutes = require('./seguridad/seguridad');

router.use(passport.initialize());
//public
router.use('/seguridad', seguridadRoutes);
//middlewares
router.use(
  '/preguntas',
  verifyApiHeaderToken,
  jwtMiddleware,
  preguntasRoutes
);

module.exports = router;
