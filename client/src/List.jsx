//List employeers
const List = ({employeeList,Example,update,updateEmployee,deleteEmployee}) => {
    return (
        <>
            <div className="table-bordered table-responsive">
              <table className="table ">           
              <thead  class="thead-dark">
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">nome</th>
                  <th scope="col">idade</th>
                  <th scope="col">sexo</th>
                  <th scope="col">endereco</th>
                  <th scope="col">salario</th>
                  <th scope="col"></th>
                </tr>
              </thead>
            
              {employeeList.map((val, key) => {            
                return (                                
                    <tbody>
                      <tr>
                        <th scope="row"><strong>{val.id}</strong></th>
                        <td><strong>{val.nome}</strong></td>
                        <td><strong>{val.idade}</strong></td>
                        <td><strong>{val.sexo}</strong></td>
                        <td><strong>{val.endereco}</strong></td>
                        <td><strong>{val.salario}</strong></td>
                        <td>
                          <Example
                            val={val.id}
                            update={update}
                            updateEmployee={updateEmployee}
                          ></Example>
                          <button
                            className="btn btn-danger"
                            onClick={() => {
                              deleteEmployee(val.id);
                            }} > Delete
                          </button>
                        </td>
                      </tr>                  
                    </tbody> 
                );
              })}
              </table> 
            </div>
        </>
    );
}
 
export default List;