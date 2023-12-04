import ProductsCard from "./ProductsView/ProductsCard";
import ProductsTable from "./ProductsView/ProductsTable";
import { useContext, useState } from "react";
import { ProductContext } from "../../Context/ProductContext";

const ProductsList = () => {
  const { products, loading } = useContext(ProductContext);
  
  const [listType, setListType] = useState("");

  const handleListType = (e) => {
    setListType(e);
  };
    
  return (
    <>
      <main >
        {loading === false ? (
          <h3>Cargando Registro de Inventario...</h3>
        ) : (
          <div className="products-list">
            {loading === true && products.length === 0 ? (
              <h3>No hay productos registrados</h3>
            ) : (
              <section >
                <div>
                  <h4>Total de Productos registrados: {products.length}</h4>
                </div>
                {
                  <>
                    {listType === "" && <h3>Seleccione una vista</h3>}
                    <div className="listType-buttons">
                      <button
                        value="table"
                        onClick={() => handleListType("table")}
                      >
                        Vista Tabla
                      </button>
                      <button
                        value="card"
                        onClick={() => handleListType("card")}
                      >
                        Vista Tarjetas
                      </button>
                    </div>
                  </>
                }
                {listType === "table" && (
                  <>
                    <h3>Tabla de Productos, por orden alfabético</h3>
                    <div className="ProductsTable">
                      <ProductsTable />
                    </div>
                  </>
                )}
                {listType === "card" && (
                  <>
                    <h3>Tarjetas de Productos, por orden alfabético</h3>
                    <div className="ProductsCard">
                      {products.map((product) => (
                        <ProductsCard
                          key={product.name}
                          product={product}/>
                      ))}
                    </div>
                  </>
                )}
              </section>
            )}
          </div>
        )}
      </main>
    </>
  );
};

export default ProductsList;
