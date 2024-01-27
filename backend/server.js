const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const dbConnection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'library',
    password: ''
});

app.get('/getBooks', async (request, response) => {
    try {
        const [books] = await dbConnection.query('SELECT * FROM books');
        request.json(books);

    } catch (error) {
        console.log(error);
        response.status(500).json({error: 'BOOKS NOT FOUND!'});
    }
});

app.listen(port, () => {
    console.log('Successfuly Connected');
});


