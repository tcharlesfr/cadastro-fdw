const Add = ({setnome,SelectBasicExample,setidade,setendereco,setsalario,addEmployee}) => {
    return ( 
        <>
            <h5>Cadastro</h5>   
            <div className="form-group">              
              <input
                className="form-control"
                placeHolder="Nome" 
                type="text"
                onChange={(event) => {
                  setnome(event.target.value);
                }}
              />
              <SelectBasicExample></SelectBasicExample>
              <input
                className="form-control"
                placeHolder="idade" 
                type="number"
                onChange={(event) => {
                  setidade(event.target.value);
                }}
              />
              <input
                className="form-control"
                placeHolder="endereco" 
                type="text"
                onChange={(event) => {
                  setendereco(event.target.value);
                }}
              />
              <input
                className="form-control"
                placeHolder="salario" 
                type="number"
                onChange={(event) => {
                  setsalario(event.target.value);
                }}
              />
              
              <button
                className="btn btn-primary"
                onClick={addEmployee}>Adicionar pessoa</button>
            </div> 
        </>
    );
}
 
export default Add;