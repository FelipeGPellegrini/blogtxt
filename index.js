const express = require("express")
const app = express();
const bodyParser = require("body-parser")
const connection = require("./database/database")

const categoriesController = require("./categories/CategoriesController")
const articlesController = require("./articles/ArticlesController")

const Article = require("./articles/Article")
const Category = require("./categories/Category")

// View Engine
app.set("view engine", "ejs")

// Static
app.use(express.static("public"))


// Body parser 
app.use(bodyParser.urlencoded({
    extended: false
}))

// Database

connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com sucesso!")
    }).catch((error) => {
        console.log(error)
    })

app.use("/", categoriesController) // A / é o prefixo para acessar as rotas configuradas no arquivo importado, podemos alterar o prefixo tbm.
app.use("/", articlesController)

app.use(bodyParser.json())

app.get("/" , (req, res) => {
    res.render("index!")
})

app.listen(8080, () => {
    console.log("Server On!")
})