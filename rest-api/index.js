const express = require('express');
const app = express();
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Starport Api",
            version: "0.1.0",
            description: "Add description here",
            contact: {
                name: "Paul Nguyen"
            },
            servers: ["http://localhost:5000"]
        }
    },
    apis: ["index.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use(`/spaceport`, swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get(`/`, (req, res) => {
    res.send(`Welcome to the test api`);
});

app.get(`/service1`, (req, res) => {
    res.send(`Hello from service1 `);
});

app.listen(5000);