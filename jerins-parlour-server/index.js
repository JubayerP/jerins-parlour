const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;


// Middleware
app.use(cors())
app.use(express.json())


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.rj3a1df.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const run = async () => {
    try {
        const serviceCollection = client.db('jerinsParlour').collection('services');

        app.get('/services', async (req, res) => {
            const services = await serviceCollection.find({}).toArray();
            res.send(services);
        })
    }
    finally {

    }
}
run().catch(console.dir)


app.get('/', async (req, res) => {
    res.send("Jerin's Parlour is running!")
})

app.listen(port, () => {
    console.log(`App is Listenning to port ${port}`);
})