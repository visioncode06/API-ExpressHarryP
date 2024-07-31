const express = require("express")
const axios = require("axios")
const PORT = 3000

const app = express();

app.use(express.json())

app.get("/books", (req, res) => {
    axios.get("https://api.potterdb.com/v1/books").then((data) => { console.log(data.data); res.send(data.data) }).catch((err) => res.send(err))
})

app.post("/book", async (req, res) => {
    try {
        let bookId = req.body.id;
        let response = await axios.get(`https://api.potterdb.com/v1/books/${bookId}`)
        console.log(response.data)
        res.send(response.data)
    } catch (err) {
        res.send(err)
    }

})

app.get("/movies",(req, res) => { axios.get("https://api.potterdb.com/v1/movies").then((data) => { console.log(data.data); res.send(data.data) }).catch((err) => res.send(err))
})

app.post("/movies", async (req,res) => {
    try {
        let moviesId = req.body.id;
        let response = await axios.get(`https://api.potterdb.com/v1/movies/${moviesId}`)
        console.log(response.data)
        res.send(response.data)
     } catch (err) {
        res.send(err)
     }
})


app.get("/characters", (req, res) => {
    axios.get("https://api.potterdb.com/v1/characters").then((data) => { console.log(data.data); res.send(data.data) }).catch((err) => res.send(err))
})
app.post("/characters", async (req, res) => {
    try {
        let charactersId = req.body.id;
        let response = await axios.get(`GET https://api.potterdb.com/v1/characters/${bookId}`)
        console.log(response.data)
        res.send(response.data)
    } catch (err) {
        res.send(err)
    }
})
app.get("/potions",(req, res) => { axios.get("https://api.potterdb.com/v1/potions").then((data) => { console.log(data.data); res.send(data.data) }).catch((err) => res.send(err))

})
app.post("/potions", async (req,res) => {
    try {
        let potionsId = req.body.id;
        let response = await axios.get(`https://api.potterdb.com/v1/potions/${potionsId}`)
        console.log(response.data)
        res.send(response.data)
     } catch (err) {
        res.send(err)
     }
})

app.get("/spells",(req, res) => { axios.get("https://api.potterdb.com/v1/spells").then((data) => { console.log(data.data); res.send(data.data) }).catch((err) => res.send(err))
})
app.post("/spells", async (req,res) => {
    try {
        let spellsId = req.body.id;
        let response = await axios.get(`https://api.potterdb.com/v1/spells/${spellsId}`)
        console.log(response.data)
        res.send(response.data)
     } catch (err) {
        res.send(err)
     }
}) 

