const express = require("express");
const app = express();
const {Restaurant} = require("./models/index")
const {sequelize} = require("./db");

const port = 3000;

//TODO: Create your GET Request Route Below: dd

app.get('/Restaurant', async (request, response) => {
    //const date = new Date();
    let allRestuarants = await Restaurant.findAll();
    response.send(allRestaurants);
})




app.listen(port, () => {
    sequelize.sync();
    console.log("Your server is listening on port " + port);
})