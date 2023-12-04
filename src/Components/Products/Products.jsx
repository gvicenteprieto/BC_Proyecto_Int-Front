import ProductsForm from "./ProductsForm";
import ProductsList from "./ProductsList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Products = () => {
  return (
    <main className="Main">
      <ProductsForm />
      <ProductsList />
      <ToastContainer autoClose={800} />
    </main>
  );
};

export default Products;
