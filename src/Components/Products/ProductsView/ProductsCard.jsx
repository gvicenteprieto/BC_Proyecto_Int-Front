import { FaTrash, FaCartShopping } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { useContext } from "react";
import { ProductContext } from "../../../Context/ProductContext";
import { CartContext } from "../../../Context/CartContext";

const ProductsCard = ({ product, sale }) => {
  const { deleteProduct, setUpdateProduct } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  return (
    <main className="main__index">
    <section className="category">
      <section className="section__products">
        <article >
          <div className="products">
            <div className="product">
              <img className="product__img" src={product.photo} alt={product.name} />
              <div className="product__info">
                <h3 className="product__title">{product.name}</h3>
                <p className="product__brand">{product.brand}</p>
                <p className="product__price">$ {product.price}</p>
                <p className="product__category">{product.category}</p>
                <div className="buttons-containers">
                  {!sale && (
                    <button
                      className="delete-button"
                      onClick={() => deleteProduct(product.name)}
                    >
                      <FaTrash />
                    </button>
                  )}

                  {sale && (
                    <button className="btnAddCart">
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
              </div>
            </div>
          </div>
        </article>
      </section>
    </section>
  </main>
  );
};

export default ProductsCard;
