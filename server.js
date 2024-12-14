const express = require("express");  // we created "express" to bring datas from Express JS library

/*  now, install Express JS
    npm i express  */

const app = express();   // "app" gets all the functions of Express JS library

app.listen(5000, (err) => err?console.log(err):console.log("server is running well !"));    //.listen → to create a server (5000 → port : it is chosen arbitrarly)

/* you have to install "nodemon" for auto refreshing
   ( to get rid of typing 'node server.js' after each new code being added)
   -- npm i nodemon --
*/

app.get("/wassim", (req, res) => res.send("ahla bel Wess !"));  // testing a route

app.use(express.json());    // config. → to make the server read JSON files
app.set("view engine", "ejs")   // config. → setting up a middleware : EJS renders HTML pages into JS

app.use("/user", require("./routes/user"));
app.use("/product", require("./routes/product"));

