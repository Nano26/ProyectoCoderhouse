import CartWidget from "./CartWidget";
const NavBar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" >
          <img
            src="/logoNameSide.png"
          />
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item is-primary">Ofertas</a>

          <a className="navbar-item">Consolas</a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">Juegos</a>

            <div className="navbar-dropdown">
              <a className="navbar-item">Acción</a>
              <a className="navbar-item">Disparos</a>
              <a className="navbar-item">Pelea</a>
              <a className="navbar-item">Familiar</a>
              <a className="navbar-item">Estrategia</a>
              <a className="navbar-item">Terror</a>
              <hr className="navbar-divider" />
              <a className="navbar-item">Report an issue</a>
            </div>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary">
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
