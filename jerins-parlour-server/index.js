const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;


// Middleware
app.use(cors())
app.use(express.json())


app.get('/', async (req, res) => {
    res.send("Jerin's Parlour is running!")
})

app.listen(port, () => {
    console.log(`App is Listenning to port ${port}`);
})