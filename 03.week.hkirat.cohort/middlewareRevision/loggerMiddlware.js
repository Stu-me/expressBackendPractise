const express = require("express");
const app = express();

app.use(express.json()); // global middleware needed to parse the json file when send through body
// type 1 to send  data through url using query
app.use(express.urlencoded());

app.get("/login", (req, res) => {
  // input of value by first method -- parameters
  // query means that the input is whatever the name used like here name and category
  // how added to url  - at the end -- http://localhost:8080/login?name=sundram&category=bca
  const userName = req.query.name;
  const category = req.query.category;
  if (userName === "sundram" && category === "bca") {
    res.send(`<h1> You are logged in  <h1>`);
  }
  res.send(
    `<h1 style = "color:blue;font-family: "Times New Roman", Times, serif> check the password <h2>`
  );
});

//type 2 to send data through url using parameters or say any last value
app.get("/patientInfo/:id", (req, res) => {
  // :q means any value or say any parameter
  const id = Number(req.params.id);
  if (Number.isNaN(id)) {
    //id === NaN in js Nan != Nan so we cant compare
    res.send(`${req.params.id} is not a number`);
  }
  res.send(`${id} so we are seeing if the id shows and that too correct`);
});

app.get("/secrets", (req, res) => {
  // to that for the body use res.body.nameRow
  const mail = req.query.email;
  const password = req.query.password;
  const country = req.query.country;

  console.log(
    `hi your email is ${mail} whose password is ${password} and the country is ${country}`
  );
  res.send(
    `hi your email is ${mail} whose password is ${password} and the country is ${country}`
  );
});
app.get("/tips", (req, res) => {
  res.send("learn as fast as you can speed up the process");
});

app.post("/secrets", (req, res) => {
  const mail = req.body.email;
  const password = req.body.password;
  const country = req.body.country;

  console.log(
    `hi your email is ${mail} whose password is ${password} and the country is ${country}`
  );
  res.send(
    `hi your email is ${mail} whose password is ${password} and the country is ${country}`
  );
});

app.listen(8080, () => {
  // it starts the server and listen request after listen no code is run
  console.log("server is live");
});
