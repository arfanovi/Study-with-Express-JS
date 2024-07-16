const express = require('express');
const app = express();


app.get("/", (req, res) => {
    res.send('Hello User');
});

// Like JSON 
app.get("/json", (req, res) => {
    res.json({
        "name":"Ovi",
    });
} )


// Express route to serve HTML content
app.get("/htmlCode", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Styled Div Example</title>
            <link rel="stylesheet" href="/styles.css">
            <style>
                .styled-div {
                    background-color: aquamarine;
                    color: black;
                    text-align: center;
                    box-sizing: border-box;
                    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                
                }
            </style>
        </head>
        <body>
            <div class="styled-div">
                <h1>Hello Node Js</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque placeat, explicabo totam voluptas cupiditate a! Ea animi ullam ipsa praesentium.</p>
            </div>
        </body>
        </html>
    `);
});


app.listen(4000, () => {
    console.log("Server is Running Port is 4000")
})