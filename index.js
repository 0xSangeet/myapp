const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello from Docker! GitHub actions working??? plss work!1 FFFFFFFIIIIIINNNNNNAAAAAAAAAAALYYYYY'));
app.listen(3000, () => console.log('Running on port 3000'));
