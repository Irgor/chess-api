const express = require('express')
const cors = require('cors')
const app = express();
const chessRoutes = require('./src/routes/chess.routes');
const port = 3000

app.use(cors())

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/chess', chessRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})