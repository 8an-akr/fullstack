const express = require("express");
const bodyParser = require("body-parser")
const app = express();
const port = 5001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("hi from home");

})

app.get("/users", (req, res) => {
    res.send("hi users");

})

app.get("/users/:item/:user/a*z", (req, res) => {
    console.log(req.params);
    const item = req.params.item;
    const user = req.params.user;
    res.send(`you picked ${item} userName ${user}`);

})

app.post("/adduser", (req, res) => {
    // console.log(req);
    console.log(req.body);
    // console.log(res);
    res.send(`User added`)
})

app.listen(port, () => {
    console.log(`ex listening at http://localhost:${port}`);
});


// terminal: node server.js