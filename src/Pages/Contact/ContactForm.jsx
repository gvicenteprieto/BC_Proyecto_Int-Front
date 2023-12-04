import { useState } from "react";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [validationMessage, setValidationMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorLastName, setErrorLastName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPhone, setErrorPhone] = useState("");
  const [errorSubject, setErrorSubject] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  let nameRegex = /^[A-Z][ A-Za-z 0-9.']{1,30}$/;
  let lastNameRegex = /^[A-Z][ A-Za-z 0-9.']{1,30}$/;
  let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  let phoneRegex = /^[0-9]{2,4}[-]{0,1}[0-9]{2,4}[-]{0,1}[0-9]{2,4}$/;
  let subjectRegex = /^[A-Z][ A-Za-z 0-9.']{1,30}$/;
  let messageRegex = /^[a-zA-Z0-9.,:;()¿?¡! ]{1,250}$/;

  const validateField = (value, fieldName, min, max, regex, errorMessage) => {
    if (value.trim() !== "" && !regex.test(value)) {
      return errorMessage;
    }

    if ((value.trim() !== "" && value.length <= min) || value.length > max) {
      return `El ${fieldName} debe tener entre ${min} y ${max} caracteres`;
    }

    if (value.trim() !== "" && value.length > max) {
      return `El ${fieldName} debe tener menos de ${max} caracteres`;
    }

    if (value.trim() === "") {
      return setValidationMessage("Todos los campos son requeridos");
    }

    return "";
  };

  const validateFields = () => {
    const errorName = validateField(
      name,
      "nombre",
      1,
      30,
      nameRegex,
      "El nombre debe comenzar en mayúsculas y tener tener mínimo 2 caracteres válidos."
    );
    const errorLastName = validateField(
      lastName,
      "apellido",
      1,
      30,
      lastNameRegex,
      "El apellido debe comenzar en mayúsculas y tener mínimo 2 caracteres válidos"
    );
    const errorEmail = validateField(
      email,
      "email",
      2,
      40,
      emailRegex,
      "El email debe tener caracteres válidos, contacto@example.com"
    );
    const errorPhone = validateField(
      phone,
      "teléfono",
      8,
      30,
      phoneRegex,
      "El teléfono debe tener caracteres válidos, ej. 011-1234-5678"
    );
    const errorSubject = validateField(
      subject,
      "asunto",
      1,
      20,
      subjectRegex,
      "El asunto debe comenzar en mayúsculas y tener mínimo 2 caracteres válidos"
    );

    const errorMessage = validateField(
      message,
      "mensaje",
      5,
      250,
      messageRegex,
      "El mensaje debe tener más de 5 caracteres y menos de 250"
    );

    setErrorName(errorName);
    setErrorLastName(errorLastName);
    setErrorEmail(errorEmail);
    setErrorPhone(errorPhone);
    setErrorSubject(errorSubject);
    setErrorMessage(errorMessage);

    if (
      errorName === "" &&
      errorLastName === "" &&
      errorEmail === "" &&
      errorPhone === "" &&
      errorSubject === "" &&
      errorMessage === ""
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValidForm = validateFields();
    if (isValidForm) {
      const contact = {
        name,
        lastName,
        email,
        phone,
        subject,
        message,
      };
      setValidationMessage("");
      setSuccessMessage(
        `Su mensaje ha sido enviado correctamente, ${contact.name}!. \n\n

        Asunto del mensaje: ${contact.subject}. Description del mensaje: ${contact.message}. \n\n

        Te responderemos a la brevedad al siguiente correo: ${contact.email}.\n\n
        
        Saludos te desea Juguetería Cósmica! \n\n`
      );

      setTimeout(() => {
        setValidationMessage("");
        setSuccessMessage("");
      }, 7000);
      setName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
    } else {
      setValidationMessage("Todos los campos son requeridos");
    }
  };

  const handleChange = (e) => {
    e.preventDefault();

    if (e.target.name === "name") {
      setName(e.target.value);
    }
    if (e.target.name === "lastName") {
      setLastName(e.target.value);
    }
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
    if (e.target.name === "phone") {
      setPhone(e.target.value);
    }
    if (e.target.name === "subject") {
      setSubject(e.target.value);
    }
    if (e.target.name === "message") {
      setMessage(e.target.value);
    }
  };

  return {
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
    validateField,
    validateFields,
    handleSubmit,
    handleChange,
  };
};
