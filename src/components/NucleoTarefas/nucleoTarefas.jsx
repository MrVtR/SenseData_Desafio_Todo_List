import './nucleoTarefas.scss';
import profile from '../../assets/icons/profile.jpg';
function Menu() {
  return (
    <>
      <div className="nucleo">
        <h1 className="welcome">Bem-Vindo de volta, Vítor</h1>
        <header className="header">
          <div className="notificacao">
            <img
              src="https://img.icons8.com/ios/30/000000/bell.png"
              alt="Notificação"
            />
          </div>
          <img src={profile} alt="Imagem Perfil" className="profile"></img>
        </header>
      </div>
    </>
  );
}
export default Menu;
