/**Cada vez que se exporta nuevamente express, solo toma en cuenta un unica importación */
const { response }          = require("express"); //Se exporta solo para tener el intellisense
const { validationResult }  = require("express-validator");

const crearUsuario = (req, res = response) => {
    const { nombre, email, contrasenia } = req.body;

    //Manejo de errores
    const errores = validationResult( req );

    if (!errores.isEmpty()) { //Si hay errores, entonces
        return res.status(400).json({
            ok: false,
            errors: errores.mapped()
        });
    }

    res.status(200).json({
        ok:     true,
        msg:    "registro",
        nombre,
        email,
        contrasenia
    });
};

const iniciarSesionUsuario = (req, res = response) => {
    const { email, contrasenia } = req.body;

    //Manejo de errores
    const errores = validationResult(req);

    if (!errores.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errores.mapped()
        });
    }

    res.status(200).json({
        ok:     true,
        msg:    "login",
        email,
        contrasenia
    });
};

const revalidarToken = (req, res = response) => {
    res.json({
        ok:     true,
        msg:    "renovar"
    });
};


module.exports = {
    crearUsuario,
    iniciarSesionUsuario,
    revalidarToken
}