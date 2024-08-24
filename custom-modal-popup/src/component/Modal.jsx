import React from "react";

const Modal = ({ id, header, body, footer, onClose }) => {
  return (
    <div className="modal" id={id || "Modal"}>
      <div className="content">
        <div className="header">
          <span onClick={onClose} className="close-modal-icon">
            &times;
          </span>
          <h2> {header ? header : "header"} </h2>
        </div>
        <div className="body">
          {body ? (
            body
          ) : (
            <div>
              {" "}
              <p>This is a Modal Body</p>{" "}
            </div>
          )}
        </div>
        <div className="footer">{footer ? footer : <h2>Footer</h2>}</div>
      </div>
    </div>
  );
};

export default Modal;
