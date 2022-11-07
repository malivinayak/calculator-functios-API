const express = require("express");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 4000;

// Base Route
app.get("/", (req, res) => {
    res.send("<h1>Welcome to calculator Functionalities</h1>");
});

// Addition Route
app.get("/add/:num1/:num2", (req, res) => {
    num1 = parseInt(req.params.num1);
    num2 = parseInt(req.params.num2);
    if (!num1 || !num2) {
        res.status(400).send(`<h1> num1 and num2 must be integer</h1> 
        <hr> <p> Example: "/add/12/6" => Ans: 17 </p>`);
        return;
    }
    res.status(200).send({
        "addition": `${num1 + num2}`
    })
});

app.post("/add", (req, res) => {
    let num1 = parseInt(req.body.num1);
    let num2 = parseInt(req.body.num2);
    if (!num1 || !num2) {
        res.status(400).send(`<h1> num1 and num2 must be integer</h1> 
        <hr> <p> Example: "/add/12/6" => Ans: 17 </p>`);
        return;
    }
    res.status(200).send({
        "addition": `${num1 + num2}`
    })
});

// Subtraction Route
app.get("/sub/:num1/:num2", (req, res) => {
    num1 = parseInt(req.params.num1);
    num2 = parseInt(req.params.num2);
    if (!num1 || !num2) {
        res.status(400).send(`<h1> num1 and num2 must be integer</h1> 
        <hr> <p> Example: "/sub/12/6" => Ans: 6 </p>`);
        return;
    }
    res.status(200).send({
        "addition": `${num1 - num2}`
    })
});

app.post("/sub", (req, res) => {
    let num1 = parseInt(req.body.num1);
    let num2 = parseInt(req.body.num2);
    if (!num1 || !num2) {
        res.status(400).send(`<h1> num1 and num2 must be integer</h1> 
        <hr> <p> Example: "/sub/12/6" => Ans: 6 </p>`);
        return;
    }
    res.status(200).send({
        "addition": `${num1 - num2}`
    })
});

// Multiplication Route
app.get("/mul/:num1/:num2", (req, res) => {
    num1 = parseInt(req.params.num1);
    num2 = parseInt(req.params.num2);
    if (!num1 || !num2) {
        res.status(400).send(`<h1> num1 and num2 must be integer</h1> 
        <hr> <p> Example: "/mul/12/6" => Ans: 72 </p>`);
        return;
    }
    res.status(200).send({
        "addition": `${num1 * num2}`
    })
});

app.post("/mul", (req, res) => {
    let num1 = parseInt(req.body.num1);
    let num2 = parseInt(req.body.num2);
    if (!num1 || !num2) {
        res.status(400).send(`<h1> num1 and num2 must be integer</h1> 
        <hr> <p> Example: "/mul/12/6" => Ans: 72 </p>`);
        return;
    }
    res.status(200).send({
        "addition": `${num1 * num2}`
    })
});

// Division Route
app.get("/div/:num1/:num2", (req, res) => {
    num1 = parseInt(req.params.num1);
    num2 = parseInt(req.params.num2);
    if (num2 == 0) {
        res.status(400).send("<h2>Number 2 can not be zero for division operation</h2>");
        return;
    }
    if (!num1 || !num2) {
        res.status(400).send(`<h1> num1 and num2 must be integer</h1> 
        <hr> <p> Example: "/div/12/6" => Ans: 2 </p>`);
        return;
    }
    res.status(200).send({
        "addition": `${num1 / num2}`
    })
});

app.post("/div/:num1/:num2", (req, res) => {
    let num1 = parseInt(req.body.num1);
    let num2 = parseInt(req.body.num2);
    if (num2 == 0) {
        res.status(400).send("<h2>Number 2 can not be zero for division operation</h2>");
        return;
    }
    if (!num1 || !num2) {
        res.status(400).send(`<h1> num1 and num2 must be integer</h1> 
        <hr> <p> Example: "/div/12/6" => Ans: 2 </p>`);
        return;
    }
    res.status(200).send({
        "addition": `${num1 / num2}`
    })
});


app.get("*", (req, res) => {
    res.status(300).send(`<h1>Route <b>"${req.url}"</b> is not available currently</h2>
    <h3>You can use following routes to use calculator functionalities</h3><hr>
    <div><h2>1. Addition : </h2>      <b> /add/num1/num2 <b> </div> <hr>
    <h2>2. Subtraction : </h2>   <b> /sub/num1/num2 <b><hr>
    <h2>3. Multiplication : </h2><b> /mul/num1/num2 <b><hr>
    <h2>4. Division : </h2>      <b> /div/num1/num2 <b><hr>
    `)
});

app.post("*", (req, res) => {
    res.status(300).send(`<h1>Route <b>"${req.url}"</b> is not available currently</h2>
    <h3>You can use following routes to use calculator functionalities</h3><hr>
    <div><h2>1. Addition : </h2>      <b> /add/num1/num2 <b> </div> <hr>
    <h2>2. Subtraction : </h2>   <b> /sub/num1/num2 <b><hr>
    <h2>3. Multiplication : </h2><b> /mul/num1/num2 <b><hr>
    <h2>4. Division : </h2>      <b> /div/num1/num2 <b><hr>
    `)
});

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`)
});

console.log(
    `Calculator Functionalities => http://127.0.0.1:${PORT} or http://localhost:${PORT}`
);