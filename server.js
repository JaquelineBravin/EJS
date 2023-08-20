const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res){
    const items = [
        {
            title: "J",
            message: " Jaqueline"
        },
        {
            title: "A",
            message: " Amora"
        },
        {
            title: "Q",
            message: " Queijo"
        }
    ]
    const subtitle = "EJS: Linguagem de modelagem para criação de páginas HTML usando JS."

    res.render("pages/index", {
        qualities: items,
        subtitle: subtitle
    }); //o Express já entende que os arquivos EJS tem que estar dentro da pasta views
});

app.get("/sobre", function (reg,res) {
    res.render("pages/about")
});

app.listen(8080);
console.log("rodadno");