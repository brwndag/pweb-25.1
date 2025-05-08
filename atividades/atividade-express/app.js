const express = require('express')
const app = express()
const port = 3000

const page = function (req, res, next) {
console.log(`Pagina: ${req.url}`)
next()
}
app.use(page)

app.get("/", (req, res) => {
    res.send(`Pagina inicial`);
  });

app.get("/about", (req, res) => {
    res.send(`Pagina sobre`);
});

app.post("/data", (req, res) => {
res.send(`data post`);
});

app.get("/users", (req, res) => {
    res.send(`Pagina de usuarios`);
});

app.get("/users/signin", (req, res) => {
    res.redirect(`/users/signup`);
});

app.get("/users/signin/:userid", (req, res) => {
    res.send('Bem vindo a nossa pagina, '+req.params.userid);
});

app.get("/users/signup", (req, res) => {
    res.send(`Pagina sign up`);
});


app.use((req, res) => {
    res.status(404).send(`Pagina acessada nao encontrada...  <a href="/">Voltar para o início</a>`)
})

app.listen(port, () => {
    console.log(`Servidor sendo executado na porta: `+port);
  });