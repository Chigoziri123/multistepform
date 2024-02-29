const express = require('express');
const cors = require('cors');
const app = express();

app.use(
    cors({
        credentials: true,
        origin: 'http://localhost:3000'
    })
);
    
// Define a route for "/"
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Define your "/test" route
app.get('/test', (req, res) => {
    res.json('Test Works');
});

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});
