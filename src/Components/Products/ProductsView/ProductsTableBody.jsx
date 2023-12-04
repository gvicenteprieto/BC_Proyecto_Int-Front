import { FaTrash } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { useContext } from "react";
import { ProductContext } from "../../../Context/ProductContext";
import { CartContext } from "../../../Context/CartContext";

const ProductsTableRows = ({sale}) => {
  const { products, deleteProduct, setUpdateProduct } =
    useContext(ProductContext);
    const { addToCart } = useContext(CartContext);
  return (
    <>
      {products.map((product) => (
        <tr key={product.name}>
          <td>{product.name}</td>
          <td>{product.short_description}</td>
          <td>$ {product.price}</td>
          <td>
            <div className="buttons-container">
            {!sale && (
              <button
                className="delete-button"
                onClick={() => deleteProduct(product.name)}
              >
                <FaTrash />
              </button>
              )}
              {sale && (
              <button>
                <FaCartShopping onClick={() => addToCart(product)} />
              </button>
              )}
              
              {!sale && (
              <button
                className="edit-button"
                onClick={() => setUpdateProduct(product)}
              >
                <FaEdit />
              </button>
               )}
            </div>
          </td>
        </tr>
      ))}
    </>
  );
};

export default ProductsTableRows;
