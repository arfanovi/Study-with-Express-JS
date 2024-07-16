const express = require('express');
const app = express();

const fs = require('fs')





app.get("/page", (req, res) =>{
    fs.readFile('./pages/index.html', (err, data) =>{
        if(err){
            console.log("Error", err);
            res.send('<h1>Something went wrong</h1>')
        } else {
            res.write(data);
            res.end();
        }
    })
})


app.get('/home', (req, res) => {
    res.send(     
        `
        <h1>Hello Home Route</h1>   
        `
    );
});

app.get('/about', (req, res) => {
    res.send(     
        `
        <h1>Hello About Route</h1>   
        `
    );
});


app.get('/contact', (req, res) => {
    res.send(     
        `
        <h1>Hello Contact Route</h1>   
        `
    );
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
