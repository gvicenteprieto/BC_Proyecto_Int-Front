import { useState, useEffect } from "react";

const Shops = () => {
  const [shop, setShop] = useState("");

  useEffect(() => {
    const store = async () => {
      try {
        const data = await fetch("https://jsonplaceholder.typicode.com/users");
        const dataJson = await data.json();
        setShop(dataJson);
      } catch (error) {
        console.log(error);
      }
    };
    store();
  }, []);

  return (
    <main className="main__shops">
      <h1>Shops</h1>
      <div className="container" id="container">
        {shop
          ? shop.map((item) => {
              return (
                <section className="section__shops" key={item.username}>
                  <h3>{item.username}</h3>
                  <p>
                    {item.address.street} {item.address.suite}{" "}
                    {item.address.city} {item.address.zipcode}
                  </p>
                  <p>https://{item.website}</p>
                </section>
              );
            })
          : ""}
      </div>
    </main>
  );
};

export default Shops;
