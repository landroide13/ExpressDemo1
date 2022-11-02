const express = require("express");
const path = require('path');
const app = express();

const data = require('./data.json')
app.use(express.static(path.join(__dirname, '/public')))

const port = 8080;

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))


app.get('/', (req, res) => {
    res.render("home")
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const dataSub = data[subreddit]
    console.log(dataSub)
    if(dataSub){
        res.render('subreddit', {...dataSub})
    }else{
        res.render("home")
    }
})

/*
app.get('*', (req, res) => {
    res.send("Route non existing")
    console.log('Cats req')
})
*/

// Run Server.

app.listen(port, () => {
    console.log("App running at port 8080")
})












