//search employeers for id and name
const Pesquisa = ({handleInputData,inputData,getClienteCodigo,getClienteNome,getEmployees}) => {
    return (
        <>
          <div className="form-group">
            
            <h5>Pesquisa</h5>
              
              <input
                placeHolder="Pesquisa"
                className="form-control"         
                onChange={handleInputData} 
                value={inputData} 
                />
              <button              
                className="btn btn-primary"
                onClick={getClienteCodigo}
                >Pesquisa id</button>

              <button
                className="btn btn-primary"
                onClick={getClienteNome}
                >Pesquisa por nome</button>

              <button
                className="btn btn-primary"
                onClick={getEmployees}
                >Mostrar todas pessoas</button>
          </div>    
        </>
    );
}
 
export default Pesquisa;