import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import CartModal from "../Components/Cart/CartModal";
export const CartContext = createContext();

const CartProvider = ({ children }) => {

  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [sale, setSale] = useState(false);

  useEffect(() => {
    const cartStorage = localStorage.getItem("cart");
    if (cartStorage) {
      setCart(cartStorage ? JSON.parse(cartStorage) : []);
    }
  }, []);
  
  const addToCart = (item) => {
    item.quantity = isNaN(item.quantity) ? 0 : item.quantity;  
    item.quantity = cart.find((i) => i.id === item.id) ? item.quantity + 1 : 1;
    const newCart = cart.filter((i) => i._id !== item._id);
    localStorage.setItem("cart", JSON.stringify([...newCart, item]));
    setCart([...newCart, item]);
    toast.success("Producto agregado al carrito.");
  };

  const removeItem = (id) => {

    const product = cart.find((item) => item._id === id)
    if (cart.find((item) => item._id === id).quantity > 1) {
      const newCart = cart.map((item) => {
        if (item._id === id) {
          item.quantity = item.quantity - 1;
          item.stock = item.stock + 1;
        }
        return item;
      });
      localStorage.setItem("cart", JSON.stringify(newCart));
      setCart(newCart);
      toast.warning("Producto eliminado del carrito.");
    } else if (cart.find((item) => item._id === id).quantity === 1) {
      const newCart = cart.filter((item) => item._id !== id);
      localStorage.setItem("cart", JSON.stringify(newCart));
      setCart(newCart);
      toast.warning("Producto eliminado del carrito.");
    }
  };

  const clearCart = () => {
    localStorage.removeItem("cart");
    setCart([]);
  };

  const totalItems = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  const totalCart = () => {
    return Math.round(
      cart.reduce((acc, item) => acc + item.quantity * item.price, 0) * 100
    ) / 100;
  };

  const buyCart = () => {

    let randomUser = new Date().getTime();
    randomUser = randomUser.toString();
    randomUser = randomUser.slice(6);
    const apis = import.meta.env.VITE_BACK_URL + "/cart";

    const username = randomUser;
    let id =cart[0]._id
    let qtyProducts = cart[0].quantity
    const data = {  id, username, qtyProducts };
  console.log("id venta: " + JSON.stringify(data.id));
    fetch(apis, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let message = `Gracias por su compra usuario ${username}!. 
    Total venta: $ ${totalCart()}.
    Productos: ${totalItems()}.
    `;
    toast.success(message,{
      autoClose: 5000,
      position: toast.POSITION.TOP_CENTER,
      interline: toast.POSITION.TOP_CENTER,
    });
    clearCart();
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeItem,
        clearCart,
        totalItems,
        totalCart,
        buyCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider };
