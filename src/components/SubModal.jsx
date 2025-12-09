import { IoMdCloseCircle } from "react-icons/io";
const SubModal = ({ content, closeSub }) => {
  return (
    <div
      className="submodal"
      style={{
        top: `calc(50% - ${content.coords.top}vh)`,
        left: `calc(50% - ${content.coords.left}vh)`,
      }}
    >
      <IoMdCloseCircle onClick={closeSub} className="cls-btn" />
      <h3>{content.title}</h3>
      <p>{content.text}</p>
    </div>
  );
};

export default SubModal;
