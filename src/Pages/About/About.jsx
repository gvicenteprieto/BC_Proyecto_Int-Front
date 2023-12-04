import React from "react";
import { Link, NavLink } from "react-router-dom";
const About = () => {
  return (
    <main className="main__about">
      <h1>Nosotros</h1>
      <section className="section__about">
        <article className="article__about">
          <h2>Quiénes somos?</h2>
          <p>
            Somos una Juguetería Online que busca acercar a los niños y niñas a
            los juguetes que más les gustan.
          </p>
          <p>
            Encontrarás una gran variedad de juguetes para todas las edades,
            desde los más pequeños hasta los más grandes.
          </p>
          <p>
            Contamos con juguetes de las mejores marcas, y con una excelente
            calidad.
          </p>
        </article>
        <article className="article__about">
          <h2>Equipo 'cósmico'</h2>
          <p>Conocé a nuestro equipo de trabajo:</p>
          <p>
            Estamos conformados por un grupo de personas que se dedican a la
            venta de juguetes, y que se preocupan por brindar un servicio de
            excelencia.
          </p>
          <p>
            Contamos con un equipo de trabajo que se encarga de la venta de los
            productos, y con un equipo de trabajo que se encarga de la
            distribución de los mismos.
          </p>
        </article>
        <article className="article__about team">
          <div className="teamColumn">
            <div className="teamCard">
              <img
                src="https://www.w3schools.com/w3images/team1.jpg"
                alt="Jane"
              />
              <div className="container">
                <h3>Jane Doe</h3>
                <p className="title">CEO & Founder</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>

                <p>
                  <button className="button">
                    <Link to="/contact">Contacto</Link>
                  </button>
                </p>
              </div>
            </div>
          </div>

          <div className="teamColumn">
            <div className="teamCard">
              <img
                src="https://www.w3schools.com/w3images/team2.jpg"
                alt="Mike"
              />

              <div className="container">
                <h3>Mike Ross</h3>
                <p className="title">Art Director</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>

                <p>
                  <button className="button">
                    <Link to="/contact">Contacto</Link>
                  </button>
                </p>
              </div>
            </div>
          </div>

          <div className="teamColumn">
            <div className="teamCard">
              <img
                src="https://www.w3schools.com/w3images/team3.jpg"
                alt="John"
              />
              <div className="container">
                <h3>John Doe</h3>
                <p className="title">Designer</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>

                <p>
                  <button className="button">
                    <Link to="/contact">Contacto</Link>
                  </button>
                </p>
              </div>
            </div>
          </div>
        </article>

        <article className="article__about">
          <h2>Por qué elegirnos?</h2>

          <p>
            Porque somos una empresa que se preocupa por la calidad de los
            productos que ofrecemos, y por la satisfacción de nuestros clientes.
          </p>
          <p>
            Porque nos esforzamos por brindar un servicio de excelencia, y por
            eso nos mantenemos en constante comunicación con nuestros clientes.
          </p>
          <p>
            Porque nos preocupamos por el medio ambiente, y por eso utilizamos
            materiales reciclables para el embalaje de nuestros productos.
          </p>
        </article>
        <article className="article__about">
          <h2>Dónde estamos?</h2>

          <p>Estamos en la ciudad de Buenos Aires, Argentina.</p>
          <p>
            Contamos con un local físico en el barrio de Palermo, y con un
            depósito en el barrio de Villa Crespo.
          </p>
          <p>Además, realizamos envíos a todo el país.</p>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11049.493992494281!2d-58.43302822803537!3d-34.57800071713376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aabcb7b7fd341%3A0xd4d803156d38286c!2sDistrito%20Arcos%20Premium%20Outlet!5e0!3m2!1ses!2sar!4v1692542656680!5m2!1ses!2sar"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </article>
      </section>
    </main>
  );
};

export default About;
