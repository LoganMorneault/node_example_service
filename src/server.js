// Import Express
const express = require('express')


// Insantiate app, an instance of an Express server
const app = express()


// Implements a GET API that sends some content to the user.
app.get("/hello_world", (req, res) => {

    // The server should print "{"hello":"world","foo":"bar"}"
    res.send({
        hello:"world",
        foo:"bar"
    })
})


// Enables JSON body payloads in the Express server.
app.use(express.json())


// Implements a POST API that accepts some content.
app.post("/message", (req, res) => {
    
    // name is specified in req.
    const name = req.body.name
    
    // Send a message based on name.
    res.send({
        response_message:`Hello ${name}. How's it going?`
    })
})


// Starts the server on port 3000. 
// Access your server at localhost:3000/hello_world

// At any point, you can terminate the server (or any terminal command) by typing ctrl+C into the command line
app.listen(3000, () => { 
    console.log("server started")
})