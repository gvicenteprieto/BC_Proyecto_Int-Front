import ProductsTableBody from "./ProductsTableBody";
import { useContext } from "react";
import { ProductContext } from "../../../Context/ProductContext";

const ProductsTable = () => {

  const { products, deleteProduct, setUpdateProduct } = useContext(ProductContext);

  return (
    <main className="main__index">
    <table >
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <ProductsTableBody />
      </tbody>
    </table>
  </main>
  );
};

export default ProductsTable;