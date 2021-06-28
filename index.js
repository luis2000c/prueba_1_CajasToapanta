const express = require("express")
const app = express()
const {RouterPrueba} = require("./routes/index_Routers")

app.use("/prueba", RouterPrueba)

app.listen(3000,() => {
    console.log("Servidor escuchando en http://localhost:3000");
})
