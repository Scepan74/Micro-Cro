import logo from "../assets/micrologo.png";
const Header = () => {
  return (
    <header>
      <div className="header-bcg"></div>
      <div className="header-elements">
        <div className="brand">
          <img src={logo} alt="Logo" id="header-logo" />
          <h3>Clinical Research Organization</h3>
        </div>
      </div>
    </header>
  );
};

export default Header;
