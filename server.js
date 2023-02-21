const express = require("express");
const app = express();
const {Restaurant} = require("./models/index")
const {sequelize} = require("./db");

const port = 3000;

//TODO: Create your GET Request Route Below: dd

// FIND ALL
app.get('/restaurants', async (request, response) => {
    //const date = new Date();
    let allRestaurants = await Restaurant.findAll();
    response.send(allRestaurants);
})


//FIND by ID
app.get('/restaurants/:id', async (req, res) => {
    const restaurantsById = await Restaurant.findByPk(req.params.id)
    res.send(restaurantsById);
})




app.listen(port, () => {
    sequelize.sync();
    console.log("Your server is listening on port " + port);
})