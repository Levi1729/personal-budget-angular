// Budget API

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/budget', (req, res) => {
    res.sendFile("personal-budget.json", { root: '.' });
});

app.get('/data', (req, res) => {
    res.sendFile("personal-budget.json", { root: '.' });
});

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});