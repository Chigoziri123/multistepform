const express = require('express');

const app = express();

app.get('/test', (req, res) => {
    res.json('Test Works')
})

app.listen(4000)