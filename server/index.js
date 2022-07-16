const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "crud-node"
});

app.post("/create", async (req, res) => {
  const nome = req.body.nome;
  const idade = req.body.idade;
  const sexo = req.body.sexo;
  const endereco = req.body.endereco;  
  const salario = req.body.salario;
  
  await db.query(
    "INSERT INTO pessoa ( nome, idade, sexo, endereco, salario ) VALUES (?,?,?,?,?)",
    [ nome, idade, sexo, endereco, salario ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get("/pessoa", async (req, res) => {
  await db.query("SELECT * FROM pessoa", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/id/:id",  (req, res) => {
  const id = req.params.id;
   db.query('SELECT * FROM pessoa WHERE id = ? ', id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/nome/:nome",  (req, res) => {
  const nome = req.params.nome;
   db.query('SELECT * FROM pessoa WHERE nome = ? ', nome, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});


app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
   db.query("DELETE FROM pessoa WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/update", (req, res) => {
  const id = req.body.id;
  const nome = req.body.nome;
  const sexo = req.body.sexo;
  const idade = req.body.idade;
  const endereco = req.body.endereco;
  const salario = req.body.salario;

  db.query(
    "UPDATE pessoa SET nome = ?, sexo = ?, idade = ?, endereco = ?, salario = ? WHERE id = ?",
    [nome, sexo, idade, endereco, salario, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
});
