import { createPortal } from "react-dom";

const DuckModal = ({ duck }) => {
  return createPortal(
    <div>{duck.firstName} portal</div>,
    document.getElementById("modal")
  );
};

export default DuckModal;
