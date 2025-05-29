import "./Content.css";

function Content() {
  return (
    <div className="content">
        <div className="hero">
          <h1>Bem-vindo a Britamaq</h1>
          <p>Seu parceiro confiável em soluções de britagem e mineração.</p>
          <p>
            Eleve o nível de sua obra com a <strong>Britamaq</strong>!<br />{" "}
            Oferecemos Equipamentos de britagem de todos os portes para uma
            ampla variedade de segmentos,
            <br />
            proporcionando tecnologia de ponta, alta performance e um excelente
            custo-benefício.
          </p>
        </div>
        <a className="cta" href="#">
          Saiba Mais
        </a>
      </div>
  );
}

export default Content;
