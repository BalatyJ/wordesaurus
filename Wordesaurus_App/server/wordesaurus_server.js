// server/wordesaurus_server.js

const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const randWord = require("./rabbitmq_connection.js")



// Establishes a RabbitMQ connection with my partner's microservice.
const randomWord = new randWord()
randomWord.start()


app.get("/api", (req, res) => {

    try {
        // Requests a random word from partner's microservice and returns the word to the UI.
        randomWord.call((response) => {
            let result = JSON.parse(response)
            console.log(result)
            res.send(result.word)
        })
    }
    catch (error) {
        res.send(error)
    }
});


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});