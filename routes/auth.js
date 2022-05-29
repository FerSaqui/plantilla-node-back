/**
 * Rutas de usuarios o auth:
 * host + /api/auth
*/

const { Router }        = require("express");
const { check }         = require("express-validator");

const { crearUsuario, iniciarSesionUsuario, revalidarToken }  = require("../controllers/authController");

const router = Router();

router.post(
        '/register', 
        [//Middlewares de validación
            check("nombre", "El campo nombre es requerido.").not().isEmpty(),
            check("email", "El correo tiene un formato inválido.").isEmail(),
            check("contrasenia", "El campo contraseña debe de ser de 6 carácteres").isLength({min: 6})
        ],
        crearUsuario
);

router.post(
    '/', 
    [//Middlewares
        check("email", "El campo email es requerido").isEmail(),
        check("contrasenia", "El campo contraseña debe de ser de 6 carácteres").isLength( {min: 6} )
    ],
    iniciarSesionUsuario
);

router.get('/renew', revalidarToken);

module.exports = router;