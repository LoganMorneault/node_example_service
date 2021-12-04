const express = require('express')

const app = express()

app.use(express.json())

app.get("/hello_world", (req, res) => {
    res.send({
        hello:"world",
        foo:"bar"
    })
})

app.post("/message", (req, res) => {
    const name = req.body.name
    res.send({
        response_message:`Hello ${name}. How's it going?`

    })
})

app.listen(process.env.PORT ?? 3000, () => { 
    console.log("server started")
})