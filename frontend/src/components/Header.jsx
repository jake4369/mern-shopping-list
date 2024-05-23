import groceriesImg from "/assets/groceries.png";
const Header = () => {
  return (
    <header>
      <img src={groceriesImg} alt="Groceries" className="header__img" />
      <h1>Shopping List</h1>
    </header>
  );
};

export default Header;
