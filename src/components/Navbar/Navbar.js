import CartWidget from "./CartWidget";
import "./Navbar.css";
const NavBar = () => {
  return (
    <nav
      className="navbar is-size-5"
      style={{ backgroundColor: "#0d1334" }}
      role="navigation"
    >
      <div className="navbar-brand">
        <a className="navbarLogo">
          <img />
        </a>
      </div>

      <div
        id="navbarBasicExample"
        className="navbar-menu"
        style={{ backgroundColor: "#0d1334" }}
      >
        <div className="navbar-start">
          <a
            className="navbar-item has-text-primary "
            style={{ backgroundColor: "#7B37FE" }}
          >
            Ofertas
          </a>

          <a className="navbar-item  has-text-link">Consolas</a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link  has-text-link">Juegos</a>

            <div className="navbar-dropdown">
              <a className="navbar-item">Acción</a>
              <a className="navbar-item">Disparos</a>
              <a className="navbar-item">Pelea</a>
              <a className="navbar-item">Familiar</a>
              <a className="navbar-item">Estrategia</a>
              <a className="navbar-item">Terror</a>
            </div>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a
                className="button is-size-5"
                style={{ backgroundColor: "#7B37FE", borderColor: "#7B37FE" }}
              >
                <CartWidget />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
