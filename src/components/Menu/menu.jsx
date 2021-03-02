import './menu.scss';
function Menu() {
  return (
    <div className="menuBar">
      <header className="header">
        <img
          src="https://img.icons8.com/dotty/64/000000/notepad.png"
          alt="TitleIcon"
        />
      </header>
      <img
        src="https://img.icons8.com/wired/64/000000/plus.png"
        className="img"
        id="add"
        alt="Adicionar"
      />
      <img
        src="https://img.icons8.com/plasticine/100/000000/close-window.png"
        className="img"
        id="sair"
        alt="Sair"
      />
    </div>
  );
}
export default Menu;
