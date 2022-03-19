const express = require('express');
const router = express.Router();
const { verifyApiHeaderToken } = require('./headerVerifyMiddleware');

//const {passport, jwtMiddleware} = require('./seguridad/jwtHelper');

const preguntasRoutes = require('./preguntas/preguntas');
//const seguridadRoutes = require('./seguridad/seguridad');
// const expedientesRoutes = require('./expedientes/expedientes');
//router.use(passport.initialize());
//public
//router.use('/seguridad', seguridadRoutes);
//middlewares
router.use(
  '/preguntas',
  verifyApiHeaderToken,
 // jwtMiddleware,
  preguntasRoutes
);
// router.use('/expedientes', expedientesRoutes);
module.exports = router;
