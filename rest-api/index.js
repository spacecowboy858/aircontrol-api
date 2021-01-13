const express = require('express');
const app = express();

console.log(`Server started...`);

app.get(`/`, (req, res) => {
    res.send(`Welcome to the test api`);
});

app.listen(5000);