import React from "react";
import { useState } from "react";
import "./bannerStyles.css";
import { Link } from "react-router-dom";
const Banner = () => {
  const [banner, setBanner] = useState("false");

  return (
    <aside>
      <div className="container">
        <Link className="Link" to={"/contact"}>
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <div className="bannerSlides fadeBanner">
                <i className="fa-solid fa-truck-fast icon"></i>
                <div>
                  <h4>Envío Gratis</h4>
                  <h5>En órdenes superiores a $30000</h5>
                </div>
              </div>
              <div className="bannerSlides fadeBanner">
                <i className="fa-regular fa-credit-card icon"></i>
                <div>
                  <h4>Hasta 6 Cuotas sin Interés</h4>
                  <h5>Con todas las tarjetas de crédito</h5>
                </div>
              </div>
              <div className="bannerSlides fadeBanner">
                <i className="fa-brands fa-whatsapp icon"></i>
                <div>
                  <h4>Atención Al Cliente</h4>
                  <h5>Estamos para ayudarte</h5>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </aside>
  );
};

export default Banner;
