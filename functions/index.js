const functions = require("firebase-functions");
const express = require("express")
const cors = require("cors");
const stripe = require("stripe")('sk_test_51LrfmDEARBHT5oPJXbV78q7oyKXllP1YNSkioxmoxj3eHATYKUnVncL66JXG5Eb7cB6i4tZ8ohXgDYeLEVxDRPB300OzgUhLzU')

// Api


// Api Config
const app = express()

// Middlewares
app.use(cors({ origin: true }))
app.use(express.json())

// Api routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total
    console.log("payment recvd amount == ", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    })

    response.status(201).send({ clientSecret: paymentIntent.client_secret, })
})

// listen command
exports.api = functions.https.onRequest(app)


// (http://localhost:5001/clone-e0fbe/us-central1/api).