import "../Solutions/Solution.css";

import imgTransport from "../../assets/transporte.jpg";
import imgBritagem from "../../assets/britagem_peneiramento.jpg";
import imgProcessamento from "../../assets/processamento.jpg";
import imgPlantas from "../../assets/plantas.jpg";

function Solution() {
  return (
    <div className="solution">
      <div className="solution-container">
        <div className="card-item">
          <img src={imgTransport} alt="Imagem Transportadores" />
          <h4>Transporte de Materiais</h4>
          <p>
            <ul>
              <li>» Transportadores de Alimentação</li>
              <li>»	Transportadores de transferência</li>
              <li>»	Transportadores de estocagem</li>
              <li>»	Rodas de transporte & Polias</li>
              <li>»	Acessórios de Transportadores</li>
            </ul>
          </p>
        </div>
        <div className="card-item">
          <img src={imgBritagem} alt="Britagem e Peneiramento" />
          <h4>Britagem e Peneiramento</h4>
          <p>
            Etapa de britagem que reduz ainda mais o tamanho das rochas para
            aplicações específicas.
          </p>
        </div>
        <div className="card-item">
          <img src={imgProcessamento} alt="Processamento Umido" />
          <h4>Processamento Umido</h4>
          <p>
            Processo final de britagem, produzindo materiais finos e uniformes
            para uso em construção.
          </p>
        </div>
        <div className="card-item">
          <img src={imgPlantas} alt="Plantas e Sistemas de britagem" />
          <h4>Transporte de Materiais</h4>
          <p>
            Processo inicial de britagem, onde as rochas são reduzidas a um
            tamanho menor.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Solution;
