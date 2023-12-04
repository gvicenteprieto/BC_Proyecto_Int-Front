import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { ProductContext } from "../../Context/ProductContext";
import { Link, NavLink } from "react-router-dom";
import CartModal from "../Cart/CartModal";
import Dates from "../Dates/Dates";
import { openMenu } from "../../Utils/dropDown";

import { FaCartShopping } from "react-icons/fa6";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const dropDown = () => {
    openMenu();
  };
  const [openModal, setOpenModal] = useState(false);

  const { totalItems } = useContext(CartContext);
  const { handleSearch, handleChange, search } =
    useContext(ProductContext);
  return (
    <>
      <Dates />
      <header className="header">
        <picture className="header__logo">
          <Link to={"/"}>
            <img
              className="logo"
              id="logo"
              width="50px"
              src="./images/logo/andy-hermawan-O1jUvZX9DOA.jpg"
              alt="Logo"
            />
          </Link>
          <h2 className="brandTitle">Juguetería Cósmica</h2>
        </picture>
        <menu className="search">
          <form onSubmit={handleSearch}>
            <input
              className="search__input"
              type="text"
              placeholder="Buscar..."
              onChange={handleChange}
              value={search}
            />
            <button className="search__button" type="submit">
              <i className="fas fa-search"></i>
            </button>
          </form>
        </menu>
        <menu className="cart-counter-number">
          <div className="cart-counter">
            <FaCartShopping
              className="cartButton"
              onClick={() => setOpenModal(true)}
            />
            <div className="cart-counter-number">
              <p>{totalItems()}</p>
            </div>
          </div>
        </menu>
        {openModal && (
          <CartModal
            title={"Carrito de Compras"}
            isOpen={openModal}
            setIsOpen={setOpenModal}
          />
        )}
        <menu className="menu">
          <Link onClick={dropDown} to="#">
            <i className="fas fa-bars"></i>{" "}
          </Link>
        </menu>
        <nav id="links" className="links header__links">
          <NavLink to={"/"}> Home</NavLink>
          <NavLink to={"/update"}>Alta</NavLink>
          <NavLink to={"/contact"}>Contacto</NavLink>
          <NavLink to={"/about"}>Nosotros</NavLink>
          <NavLink to={"/shops"}>Shops</NavLink>
        </nav>
        <ToastContainer autoClose={800} />
      </header>
    </>
  );
};

export default Header;
