const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(
        `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Node js Sweet</title>
            <style>
                div {
                    background-color: aquamarine;
                    color: black;
                    text-align: center;
                    box-sizing: border-box;
                    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                    height: 20vh;
                    width: 20vh;
                    padding: 2rem;
                    margin: 10px;
                }
            </style>
        </head>
        <body>
            <div>
                <h1>Hello Node Js</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque placeat, explicabo totam voluptas cupiditate a! Ea animi ullam ipsa praesentium.</p>
            </div>
        </body>
        </html>
        `
    );
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
