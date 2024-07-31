const express = require("express")
const app = express();
const PORT = 3001;
app.use(express.json());

// routes
app.get("/users", (req, res) => {
    let users = "all users"
    res.send(users)
})
app.post("/users", (req, res) => {
    console.log(req.body)
    res.send("user received")
})
app.get("/", (req, res) => {
    res.send(`GET request at localhost:${PORT}/`)
})
app.post("/", (req, res) => {
    let username = req.body.username;
    let password = req.body.password;;
    console.log("username: " + username)
    console.log("password: " + password)
    res.send(`POST request at localhost:${PORT}/`)
})
app.listen(PORT, () => {
    console.log(`express api running at localhost:${PORT}`)
})


