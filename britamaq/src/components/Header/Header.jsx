import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <a href="#">Britamaq</a>
      </div>

      <div className="menu">
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Sobre</a></li>    
            <li><a href="#">Serviços</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </nav>
      </div>

      <div className="cta">
        <a
          href="https://contate.me/5581982482727137"
          className="cta_button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Orçamento
        </a>
      </div>
    </div>
  );
}

export default Header;
