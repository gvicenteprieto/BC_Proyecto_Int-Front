import { useEffect } from "react";

import { ContactForm } from "./ContactForm";
const Contact = () => {
  const {
    name,
    lastName,
    email,
    phone,
    subject,
    message,
    validationMessage,
    successMessage,
    errorName,
    errorLastName,
    errorEmail,
    errorPhone,
    errorSubject,
    errorMessage,
    setValidationMessage,
    validateFields,
    handleSubmit,
    handleChange,
  } = ContactForm();

  useEffect(() => {
    validateFields();
    validationMessage ? setValidationMessage("") : setValidationMessage("");
  }, [name, lastName, email, phone, subject, message]);

  return (
    <main className="main__contact">

      <h1>Contacto</h1>

      <div className="success-message">
        <h2 id="validationMessage">
          {" "}
          {successMessage
            ? (() => {
                window.scrollTo(0, 0);
                return successMessage;
              })()
            : ""}
        </h2>
        <h2 id="validationMessage">
          {validationMessage
            ? (() => {
                window.scrollTo(0, 0);
                return validationMessage;
              })()
            : ""}
        </h2>
      </div>
      
      <form onSubmit={handleSubmit} className="form__contact">

        <label htmlFor="name" className="label__contact">
          Nombre
        </label>
        <input
          className="input__contact"
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={handleChange}
          placeholder="ex: Juan, Juan Pablo, J.P."
        />
        <div>
          <p className="error-message">{errorName ? errorName : ""}</p>
        </div>

        <label htmlFor="lastName" className="label__contact">
          Apellido
        </label>
        <input
          className="input__contact"
          type="text"
          name="lastName"
          id="lastName"
          value={lastName}
          onChange={handleChange}
          placeholder="ex: O., O Connor, O'Connor"
        />
        <div>
          <p className="error-message">{errorLastName ? errorLastName : ""}</p>
        </div>

        <label htmlFor="email" className="label__contact">
          Email
        </label>
        <input
          className="input__contact"
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={handleChange}
          placeholder="ex: contact@example.com"
        />
        <div>
          <p className="error-message">{errorEmail ? errorEmail : ""}</p>
        </div>

        <label htmlFor="phone" className="label__contact">
          Teléfono
        </label>
        <input
          className="input__contact"
          type="tel"
          name="phone"
          id="phone"
          value={phone}
          onChange={handleChange}
          placeholder="ex: 011-1234-5678"
        />
        <div>
          <p className="error-message">{errorPhone ? errorPhone : ""}</p>
        </div>

        <label htmlFor="mesasageSubject" className="label__contact">
          Asunto
        </label>
        <input
          className="input__contact"
          type="text"
          name="subject"
          id="subject"
          value={subject}
          onChange={handleChange}
          placeholder="ex: Consulta de compra, Consulta por cambio, Otra.."
        />
        <div>
          <p className="error-message">{errorSubject ? errorSubject : ""}</p>
        </div>

        <label htmlFor="mesasage" className="label__contact">
          Mensaje
        </label>
        <textarea
          className="input__contact"
          name="message"
          id="message"
          value={message}
          onChange={handleChange}
          cols="30"
          rows="10"
          placeholder="Ingrese su mensaje"
        ></textarea>
        <div>
          <p className="error-message">{errorMessage ? errorMessage : ""}</p>
        </div>

        <button className="btnSend button__contact">Enviar Consulta</button>

      </form>

    </main>
  );
};

export default Contact;
