import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [updateProduct, setUpdateProduct] = useState(null);
  const [errorLoad, setErrorLoad] = useState(false);
  const [loading, setLoading] = useState(false);

  const [validationMessage, setValidationMessage] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorPrice, setErrorPrice] = useState("");
  const [errorStock, setErrorStock] = useState("");
  const [errorBrand, setErrorBrand] = useState("");
  const [errorCategory, setErrorCategory] = useState("");
  const [errorShort_description, setErrorShort_description] = useState("");
  const [errorLong_description, setErrorLong_description] = useState("");
  const [errorFree_shipping, setErrorFree_shipping] = useState("");
  const [errorAge_from, setErrorAge_from] = useState("");
  const [errorAge_to, setErrorAge_to] = useState("");
  const [errorPhoto, setErrorPhoto] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [brand, setBrand] = useState("");
  const [short_description, setShort_description] = useState("");
  const [long_description, setLong_description] = useState("");
  const [free_shipping, setFree_shipping] = useState("");
  const [age_from, setAge_from] = useState("");
  const [age_to, setAge_to] = useState("");
  const [photo, setPhoto] = useState("");


  const urlData = import.meta.env.VITE_BACK_URL // import.meta.env.VITE_MOCKAPI_URL

  const fetchProducts = async () => {
    setLoading(false);
    const response = await fetch(urlData);

    const data = await response.json();
    //console.log(data)
    if (data) {
      setProducts(data.sort((a, b) => a.name.localeCompare(b.name)));
      setLoading(true);
    }
    
  };

  const addProduct = (product) => {
    const existProduct = products.find((p) => p.name === product.name);
    if (existProduct) {
      setErrorLoad(true);
      toast.warning("El producto que intenta cargar ya existe!");
      return;
    }

    const validateField = (field, fieldName, min, max, regex, message) => {
      if (!field) {
        return `El campo ${fieldName} es obligatorio`;
      }
      if (field.length < min) {
        return `El campo ${fieldName} debe tener al menos ${min} caracteres`;
      }
      if (field.length > max) {
        return `El campo ${fieldName} debe tener menos de ${max} caracteres`;
      }
      if (!regex.test(field)) {
        return message;
      }

      return "";
    };

    const validateNumber = (field, fieldName, min, max) => {
      if (!field) {
        return `El campo ${fieldName} es obligatorio`;
      }

      if (field < min) {
        return `El campo ${fieldName} debe ser mayor o igual a ${min} caracteres`;
      }

      if (field > max) {
        return `El campo ${fieldName} debe ser menor o igual a ${max} caracteres`;
      }
      return "";
    };

    const validateForm = () => {
      const errorName = validateField(
        product.name,
        "Nombre",
        1,
        30,
        /^[A-Z 0-9][ A-Za-z 0-9.']{0,30}$/,
        "El nombre debe comenzar en mayúsculas y tener tener caracteres válidos."
      );

      const errorPrice = validateNumber(
        product.price,
        "Precio",
        1,
        9,
        /^[0-9]+([.][0-9]+)?$/
      );

      const errorStock = validateNumber(
        product.stock,
        "Stock",
        1,
        9,
        /^[0-9]+$/
      );

      const errorBrand = validateField(
        product.brand,
        "Marca",
        1,
        30,
        /^[A-Z 0-9][ A-Za-z 0-9.']{0,30}$/,
        "La marca debe comenzar en mayúsculas y tener tener caracteres válidos."
      );

      const errorCategory = validateField(
        product.category,
        "Categoría",
        1,
        30,
        /^[A-Z][ A-Za-z 0-9.']{0,30}$/,
        "La categoría debe comenzar en mayúsculas y tener tener caracteres válidos."
      );

      const errorShort_description = validateField(
        product.short_description,
        "Descripción corta",
        1,
        30,
        /^[A-Za-z0-9\s]{1,30}$/,
        "La descripción corta debe tener caracteres válidos."
      );

      const errorLong_description = validateField(
        product.long_description,
        "Descripción larga",
        1,
        30,
        /^[A-Za-z0-9\s]{1,30}$/,
        "La descripción larga debe tener caracteres válidos."
      );

      const errorFree_shipping = validateField(
        product.free_shipping,
        "Envío gratis",
        1,
        30,
        /^[A-Za-z0-9\s]{1,30}$/,
        "El envío gratis debe tener caracteres válidos."
      );

      const errorAge_from = validateNumber(
        product.age_from,
        "Edad desde",
        1,
        2,
        /^[0-9]{1,2}$/
      );

      const errorAge_to = validateNumber(
        product.age_to,
        "Edad hasta",
        1,
        2,
        /^[0-9]{1,2}$/
      );

      const errorPhoto = validateField(
        product.photo,
        "Foto",
        1,
        300,
        /^[A-Za-z0-9\s]{1,300}$/,
        "La foto debe tener caracteres válidos."
      );

      setErrorName(errorName);
      setErrorPrice(errorPrice);
      setErrorStock(errorStock);
      setErrorBrand(errorBrand);
      setErrorCategory(errorCategory);
      setErrorShort_description(errorShort_description);
      setErrorLong_description(errorLong_description);
      setErrorFree_shipping(errorFree_shipping);
      setErrorAge_from(errorAge_from);
      setErrorAge_to(errorAge_to);
      setErrorPhoto(errorPhoto);

      if (
        errorName === "" &&
        errorPrice === "" &&
        errorStock === "" &&
        errorBrand === "" &&
        errorCategory === "" &&
        errorShort_description === "" &&
        errorLong_description === "" &&
        errorAge_from === "" &&
        errorAge_to === "" &&
        errorPhoto === ""
      ) {
        return true;
      } else {
        return false;
      }
    };

    
    if (
      product.name.trim() === "" ||
      product.price.trim() === "" ||
      product.stock.trim() === "" ||
      product.brand.trim() === "" ||
      product.category.trim() === "" ||
      product.short_description.trim() === "" ||
      product.long_description.trim() === "" ||
      product.age_from.trim() === "" ||
      product.age_to.trim() === "" ||
      product.photo.trim() === ""
    ) {
      toast.error("Todos los campos son obligatorios!");
      return;
    }

    const newProduct = {
      name: product.name,
      price: product.price,
      stock: product.stock,
      brand: product.brand,
      category: product.category,
      short_description: product.short_description,
      long_description: product.long_description,
      free_shipping: product.free_shipping,
      age_from: product.age_from,
      age_to: product.age_to,
      photo: product.photo,
    };

    const productsFetch = async () => {
      const response = await fetch(urlData, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });
      const data = await response.json();
      setProducts([...products, data]);
    };
    productsFetch();
    toast.success("Producto agregado con éxito!");

    setTimeout(() => {
      fetchProducts();
    }, 250);

  };

  const deleteProduct = async (name) => {
    setErrorLoad(false);
    const productsData = await fetch(urlData);
    const productsDataJson = await productsData.json();
    const productDelete = productsDataJson
      .map((doc) => ({ name: doc.name }))
      .filter((doc) => doc.name === name);

    const productsFetch = async () => {
      const response = await fetch(urlData);
      const data = await response.json();
      data.forEach((doc) => {
        if (doc.name === productDelete[0].name) {
          fetch(urlData + "/" + doc.id, {
            method: "DELETE",
          });
        }
      });
    };
    productsFetch();
    setTimeout(() => {
      toast.info("Producto eliminado con éxito!");
      fetchProducts();
    }, 250);
  };

  const editProduct = async (name, product) => {
    const productsData = await fetch(urlData);
    const productsDataJson = await productsData.json();
    const productEdit = productsDataJson
      .map((doc) => ({ name: doc.name }))
      .filter((doc) => doc.name === name);

    const productsFetch = async () => {
      const response = await fetch(urlData);
      const data = await response.json();
      data.forEach((doc) => {
        if (doc.name === productEdit[0].name) {
          fetch(urlData + "/" + doc.id, {
            method: "PUT",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(product),
          });
        }
      });
    };

    productsFetch();

    setTimeout(() => {
      toast.success("Producto actualizado con éxito!");
      fetchProducts();
    }, 250);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const searchProducts = (search) => {
    const filteredProducts = products.filter((product) => {
      return product.name.toLowerCase().includes(search.toLowerCase());
    });

    setFilteredProducts(filteredProducts);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    searchProducts(search);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    searchProducts(search);
    setFilteredCategoryProducts([]);

    if (search.length === 0) {
      setFilteredProducts([]);
    }
  }, [search]);

  // categorias unicas  por orden alfabetico
  const categories = products.map((product) => product.category);
  const uniqueCategories = [...new Set(categories)].sort();

  //filtrado por categorias
  const [category, setCategory] = useState("");
  const [filteredCategoryProducts, setFilteredCategoryProducts] = useState([]);

  const filterCategoryProducts = (category) => {
    const filteredCategoryProducts = products
      .filter((product) => {
        return product.category.toLowerCase().includes(category.toLowerCase());
      })
      .sort((a, b) => a.name.localeCompare(b.name));
    setFilteredCategoryProducts(filteredCategoryProducts);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  useEffect(() => {
    filterCategoryProducts(category);
    setFilteredProducts([]);
    if (category.length === 0) {
      setFilteredCategoryProducts([]);
    }
  }, [category]);

  return (
    <ProductContext.Provider
      value={{
        products,
        updateProduct,
        errorLoad,
        loading,
        addProduct,
        deleteProduct,
        editProduct,
        setUpdateProduct,
        setErrorLoad,
        searchProducts,
        handleSearch,
        handleChange,
        filteredProducts,
        uniqueCategories,
        category,
        handleCategory,
        filteredCategoryProducts,

        errorName,
        errorPrice,
        errorStock,
        errorBrand,
        errorCategory,
        errorShort_description,
        errorLong_description,
        errorFree_shipping,
        errorAge_from,
        errorAge_to,
        errorPhoto,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider };
