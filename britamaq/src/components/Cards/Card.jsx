import "./Card.css";

function Card() {
  return (
    <>
      <div className="card_container">
        <div className="card">
          <h1>Servindo as indústrias que constroem nosso mundo</h1>
          <p>Na Superior Industries, projetamos e fabricamos equipamentos essenciais para a produção de materiais que formam a espinha dorsal da infraestrutura e da indústria. Da britagem e peneiramento à lavagem e transporte, nossos sistemas alimentam a produção de agregados para estradas, pontes e serviços públicos, bem como a extração e o processamento de minerais essenciais para as operações de mineração em todo o mundo.</p>
          <p>Com raízes na área rural de Minnesota, nossa empresa privada cresceu de uma pequena oficina inovadora para uma líder global, entregando soluções e oportunidades ousadas para nossos clientes, membros da equipe e as indústrias que atendemos com orgulho. A cultura espirituosa da Superior garante que cada parceria seja construída para durar enquanto levamos materiais e ideias adiante... juntos!</p>
        </div>
        
        <div className="card_2">
          <iframe
            width="550"
            height="340"
            src="https://www.youtube.com/embed/5EdA21zNH6s"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Card;
