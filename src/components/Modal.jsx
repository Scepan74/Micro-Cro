import React, { useState } from "react";
import SubModal from "./SubModal";
import { IoMdCloseCircle } from "react-icons/io";
const Modal = ({ content, onClick }) => {
  const [submodalText, setSubmodalText] = useState([]);
  const [isSubVisible, setIsSubVisible] = useState(false);

  const subHandler = (item) => {
    setSubmodalText(item);
  };
  const closeSub = () => {
    setIsSubVisible(false);
    setSubmodalText([]);
  };
  return (
    <div className="modal-container">
      <div className="modal">
        <IoMdCloseCircle className="cls-btn" onClick={onClick} />
        <h3
          onClick={() => {
            subHandler(content);
            setIsSubVisible(true);
          }}
        >
          {content.title}
        </h3>
        <div className="ul-container">
          <ul>
            {content.text.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  subHandler(item);
                  setIsSubVisible(true);
                }}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {submodalText && isSubVisible && (
        <SubModal
          closeSub={closeSub}
          content={{
            title: submodalText.title,
            text: submodalText.paragraph,
            coords: submodalText.coords,
          }}
        />
      )}
    </div>
  );
};

export default Modal;
