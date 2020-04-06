// app.js for assignment 8
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const request = require("request");
const faker = require("faker");

const app = express();
app.set("view engine", "ejs"); // allows reference to views files without .ejs extension
app.use(express.static("public")); // allows reference to css files 
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    let cp = faker.company.catchPhrase();
    res.render("index", {cp});
});

app.get("/googleAbout", function(req, res) {
    let url = "https://pixabay.com/api/?key=15448805-2fb6d362dc06889b4a4ad4a80&q=Google";
    request(url, function(error, response, dataStream) {
        if(!error && response.statusCode == 200) {
            var data = JSON.parse(dataStream);
            res.render("googleAbout", {data: data});
        } 
    });
}); // route for googleAbout

app.get("/facebookAbout", function(req, res) {
    let url = "https://pixabay.com/api/?key=15448805-2fb6d362dc06889b4a4ad4a80&q=Facebook";
    request(url, function(error, response, dataStream) {
        if(!error && response.statusCode == 200) {
            var data = JSON.parse(dataStream);
            res.render("facebookAbout", {data: data});
        } 
    });
}); // route for facebookAbout

app.get("/spotifyAbout", function(req, res) {
    let url = "https://pixabay.com/api/?key=15448805-2fb6d362dc06889b4a4ad4a80&q=Spotify";
    request(url, function(error, response, dataStream) {
        if(!error && response.statusCode == 200) {
            var data = JSON.parse(dataStream);
            res.render("spotifyAbout", {data: data});
        } 
    });
}); // route for spotifyAbout

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("App is running!");
});
