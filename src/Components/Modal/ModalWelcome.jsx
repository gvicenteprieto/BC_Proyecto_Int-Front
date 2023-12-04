import ReactModal from "react-modal";
import { useState } from "react";
import "./styles.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    height: "80%",
    // backgroundColor: "grey",
    // padding: "1rem",
  },
};

const ModalWelcome = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  // function afterOpenModal() {
  //   alert("hi ho lets go!");
  // }

  // const handleCloseModalOut = (e) => {
  //   if (e.key === "27" || e.key === "Escape" || e.key === "Esc" || e.key === "esc" || e.key === 27) {
  //     setIsOpen(false);
  //   }
  // };

  

  return (
    <ReactModal
      isOpen={isOpen}
      handleCloseModal={handleCloseModal}
      closeTimeoutMS={200}
      className="modal"
      style={customStyles}
      onRequestClose={handleCloseModal}
      onAfterClose={() => alert("this is it ✨")}
      // onAfterOpen={afterOpenModal}
    >
      <div className="modal-content">
        <h2>¡Te damos una gran bienvenida!</h2>
        <h1>Tienda Cósmica, aplicación de productos</h1>
        <button className="modal-button" onClick={handleCloseModal}>
          <div>Ingresar 🚀</div>
        </button>
      </div>
    </ReactModal>
  );
};

export default ModalWelcome;
