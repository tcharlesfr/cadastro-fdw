//charts google
const Graphics = ({Chart,chartSexo,chartIdade,chartSalario}) => {
    return (
        <div className="row">         
          <div class="card col">
            <div class="card-header">
              Sexo
            </div>
            <div class="card-body">
              <blockquote class="blockquote mb-0">
                <Chart
                  chartType="PieChart"
                  data={chartSexo}
                  width={"100%"}
                  height={"200px"}
                />
                <footer class="blockquote-footer"><cite title="Título da fonte">Desconsiderando as questões de gêneros</cite></footer>
              </blockquote>
            </div>
          </div>
          <div class="card col">
            <div class="card-header">
              Idade
            </div>
            <div class="card-body">
              <blockquote class="blockquote mb-0">
                <Chart
                  chartType="PieChart"
                  data={chartIdade}
                  width={"100%"}
                  height={"200px"}
                />
                {/* <footer class="blockquote-footer">Alguém famoso em <cite title="Título da fonte">Título da fonte</cite></footer> */}
              </blockquote>
            </div>
          </div>
          <div class="card col">
            <div class="card-header">
              Salário
            </div>
            <div class="card-body">
              <blockquote class="blockquote mb-0">
                <Chart
                  chartType="PieChart"
                  data={chartSalario}
                  width={"100%"}
                  height={"200px"}
                />
                {/* <footer class="blockquote-footer">Alguém famoso em <cite title="Título da fonte">Título da fonte</cite></footer> */}
              </blockquote>
            </div>
          </div>
        </div> 
    );
}
 
export default Graphics;