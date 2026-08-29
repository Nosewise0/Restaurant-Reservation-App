require('dotenv').config();
const express = require('express');
const cors = require('cors');
const contactRoutes = require('./routes/contact');
const reservationRoutes = require('./routes/reservations');

const app = express();

app.use(cors({origin:process.env.FRONTEND_URL || 'http://localhost:3000'}));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, World!');
})

app.use('/api', contactRoutes);
app.use('/api', reservationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})