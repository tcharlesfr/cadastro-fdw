import "./App.css";
import { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

import Axios from "axios";
import Form from 'react-bootstrap/Form';

import Example from "./Example.jsx";
import Add from "./Add.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Pesquisa from "./Pesquisa.jsx";
import List from "./List.jsx";
import Graphics from "./Graphics.jsx";

function App() {
  const [id, setid] = useState("");
  const [nome, setnome] = useState("");  
  const [idade, setidade] = useState("");  
  const [sexo, setsexo] = useState("");
  const [endereco, setendereco] = useState("");
  const [salario, setsalario] = useState(0);

  const [inputData, setInputData] = useState("");
  const [employeeList, setEmployeeList] = useState([]);
  
  const [homem, setHomem] = useState(0);
  const [mulher, setMulher] = useState(0);
  const [maiorIdade, setMaiorIdade] = useState(0);
  const [menorIdade, setMenorIdade] = useState(0);
  const [maiorSalario, setMaiorSalario] = useState(0);
  const [menorSalario, setMenorSalario] = useState(0);

  const update = {id , nome, idade, sexo, endereco, salario};
 
  const addEmployee = () => {
    Axios.post("http://localhost:3001/create", {
      id: id,
      nome: nome,
      sexo: sexo,
      endereco: endereco,
      idade: idade,
      salario: salario,
    }).then(() => {
      setEmployeeList([
        ...employeeList,
        {
          id: id,
          nome: nome,
          sexo: sexo,
          endereco: endereco,
          idade: idade,
          salario: salario,
        },
      ]);
    });
  };

  const contSexo = () => {
    let h =0;
    let m =0;
    for (let e of employeeList){
      if (e.sexo === "homem"){
        h++;
      }
      if (e.sexo === "mulher"){
        m++;
      }
    }
    setHomem(h);
    setMulher(m);
  }

  const contIdade = () => {
    let maior = 0;
    let menor =0;
    for (let e of employeeList){
      if (e.idade > 18){
        maior++;
      }
      if (e.idade < 18){
        menor++;
      }
    }
    setMaiorIdade(maior);
    setMenorIdade(menor);
  }

  const contSalario = () => {
    let maior = 0;
    let menor = 0;
    for (let e of employeeList){
      if (e.salario >= 1000){
        maior++;
      }
      if (e.salario < 1000){
        menor++;
      }
    }
    setMaiorSalario(maior);
    setMenorSalario(menor);
  }

  useEffect(() => {
    console.log(employeeList)
    getEmployees();    
  }, [])

  useEffect(() => {    
    contSexo();
    contIdade();
    contSalario();
  }, [employeeList])

  const getEmployees = () => {
    Axios.get("http://localhost:3001/pessoa").then((response) => {
      setEmployeeList(response.data);      
    });
  };
  
  const getClienteCodigo = () => {
    Axios.get(`http://localhost:3001/id/${inputData}`).then((response) => {
      setEmployeeList(response.data);      
    });
  };

  const getClienteNome = () => {
    Axios.get(`http://localhost:3001/nome/${inputData}`).then((response) => {
      setEmployeeList(response.data);
    });
  };

  const deleteEmployee = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setEmployeeList(
        employeeList.filter((val) => {
          return val.id !== id;
        })
      );
    });
  };
  
  const updateEmployee = (id) => {
    Axios.post("http://localhost:3001/update", {
      id: update.id,
      nome: update.nome,
      sexo: update.sexo,
      endereco: update.endereco,
      idade: update.idade,
      salario: update.salario,
    }).then(
      (response) => {
        setEmployeeList(
          employeeList.map((val) => {
            return val.id === update.id
              ? {
                  id: val.id,
                  nome: update.nome,
                  sexo: update.sexo,
                  idade: update.idade,
                  endereco: update.endereco,
                  salario: update.salario,
                }
              : val;
          })
        );
      }
    );
  };
  
  const handleInputData = (input) => {    
    setInputData(input.target.value);
  }

  const chartSexo = [
    ["sexo", "quantidade"],
    ["homem", homem],
    ["mulher", mulher],
  ];
  const chartIdade = [
    ["idade", "quantidade"],
    ["18 +", maiorIdade],
    ["Menor de idade", menorIdade],
  ];
  const chartSalario = [
    ["salario", "quantidade"],
    ["R$1.000 +", maiorSalario],
    ["até R$999.00", menorSalario],
  ];

  ////
  function SelectBasicExample() {
    return (
      <Form.Select
        className="form-control"
        aria-label="Default select example"
        onChange={(event) => {
          setsexo(event.target.value);
        }}>
          <option>Sexo</option>
          <option value="homem">homem</option>
          <option value="mulher">mulher</option>
      </Form.Select>
    );
  };

  
  return (
    <div className="App">
      <Jumbotron></Jumbotron>   
      <div class="container">
        <div className="row">
          <div className="col-3">
            <Add
              SelectBasicExample={SelectBasicExample}
              setnome={setnome}
              setidade={setidade}
              setendereco={setendereco}
              setsalario={setsalario}
              addEmployee={addEmployee}
            ></Add>      
          </div>
          <div className="col-9">            
            <Pesquisa
              handleInputData={handleInputData}
              inputData={inputData}
              getClienteCodigo={getClienteCodigo}
              getClienteNome={getClienteNome}
              getEmployees={getEmployees}
            ></Pesquisa>
            <List
              employeeList={employeeList}
              Example={Example}
              update={update}
              updateEmployee={updateEmployee}
              deleteEmployee={deleteEmployee}
            ></List>
          </div> 
        </div>            
        <Graphics
          Chart={Chart}
          chartSexo={chartSexo}
          chartIdade={chartIdade}
          chartSalario={chartSalario}
        ></Graphics>
      </div>              
    </div>
  );
}

export default App;
