require('dotenv').config();
const express = require('express');
const cors = require('cors');
const contactRoutes = require('./routes/contact');

const app = express();

app.use(express.json());
app.use(cors({origin: 'http://localhost:3000'}));

app.get('/', (req, res) => {
    res.send('Hello, World!');
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})