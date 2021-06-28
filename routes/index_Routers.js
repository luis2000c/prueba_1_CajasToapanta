const { Router } = require("express");
const { FetchData } = require("../lib/data");
const router = Router();

router
    .get("/personaje/:id", (req, res) => {//EndPoint 1
        const { params: { id } } = req
        
        res.json({
            
            msg: "El personaje es según el id del parámetro",
            body: [(async () => {
                await FetchData.getCharacter(id)
            })()]
        })
    })
    .get("/personajepage", (req, res) => {//EndPoint 3
        const { query: { pagina } } = req
        res.json({
            msg: "Personajes de la página",
            body: [(async () => {
                await FetchData.getByPage(pagina)
            })()
]
        })
    })
    .get("/personajegenero", (req, res) => {//EndPoint 4
        const { query: { genero } } = req

        res.json({
            msg: "Personajes Por su género",
            body: [(async () => {
               await FetchData.getByCharacterGender(genero)
            })()]
        })
    })

module.exports.RouterPrueba = router
