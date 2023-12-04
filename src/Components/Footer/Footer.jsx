import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <picture className="footer__logo">
          <Link to={"/"}>
            <img
              className="logo"
              id="logo"
              width="50px"
              src="./images/logo/andy-hermawan-O1jUvZX9DOA.jpg"
              alt="Logo"
            />
          </Link>
        </picture>
        <menu>
          <nav className="footer__links">
            <Link to={"/contact"}>Contacto</Link>
          </nav>
        </menu>
        <menu className="footer__address">
          <p>
            <Link to={"/contact"}>
              <i className="fas fa-map-marker-alt"></i> Paraguay 4979, CABA
            </Link>
          </p>
          <p>
            <Link to={"/contact"}>
              {" "}
              <i className="fas fa-phone-alt"></i> 011 1234-5678{" "}
            </Link>
          </p>
          <p>
            <i className="fas fa-envelope"></i>
            <Link
              to={"mailto:jugueteria@jugueteria_cosmica.com.ar"}
              target="_blank"
            >
              jugueteria@cosmica.com.ar
            </Link>
          </p>
        </menu>
        <nav className="footer__social">
          <Link
            to="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-square"></i>
          </Link>
          <Link
            to="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram-square"></i>
          </Link>
          <Link
            to="https://www.twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-x-twitter"></i>
          </Link>
        </nav>
      </footer>
      <footer className="footer-bc-edIT">
        <p>Bootcamp Full Stack Engineer - Educación IT</p>
        <p>Proyecto Integrador - Etapa 2</p>
        <p>Profesor: Sebastián Moscchini | Tutora: Melina Tevez</p>
        <p>Proyecto: Guillermo Vicente</p>
      </footer>
    </>
  );
};

export default Footer;
