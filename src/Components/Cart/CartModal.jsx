import ReactModal from "react-modal";
import { FaTrash } from "react-icons/fa6";
import { FaRegTrashCan } from "react-icons/fa6";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import "./cartModalStyles.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "95%",
    height: "60%",
    color: "white",
    backgroundColor: "grey",
    padding: ".5rem",
  },
};
const CartModal = ({ title, isOpen, setIsOpen }) => {
  const { cart, setCart, clearCart, removeItem, totalItems, totalCart } = useContext(CartContext);

 const handleCloseModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ReactModal
      isOpen={isOpen}
      style={customStyles}
      onRequestClose={handleCloseModal}
      appElement={document.getElementById("root")}
    >
      <div>
        <div className="modal-header">
          <h3>{title}</h3>
          <button className="modal-button" onClick={handleCloseModal}>
            X
          </button>
        </div>
      </div>

      <div className="cart-button-container">
        {isOpen && (
          <div>
            {cart.length > 0 ? (
              <>
                {cart.map((item) => (
                  <div className="cart-item" key={item.id}>
                    <h4>{item.name}</h4>
                    <p>Precio: $ {item.price}</p>
                    <p>Cantidad: {item.quantity}</p>
                    <button
                      className="remove-button"
                      onClick={() => removeItem(item.id)}
                    >
                      <FaTrash /> Quitar
                    </button>
                  </div>
                ))}
                <p className="cart-title">Total Productos: {totalItems()}</p>
                <p className="cart-title">Total: $ {totalCart()}</p>
                <button className="clear-button" onClick={() => clearCart()}>
                  <FaRegTrashCan className="clear-button" />
                  Limpiar carrito
                </button>
              </>
            ) : (
              <p>No hay productos en el carrito</p>
            )}
          </div>
        )}
      </div>
    </ReactModal>
  );
};

export default CartModal;
