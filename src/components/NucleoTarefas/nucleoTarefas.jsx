import './nucleoTarefas.scss';
import profile from '../../assets/icons/profile.jpg';
import { ContainerTarefa } from '../../services/export';
function Menu() {
  return (
    <>
      <div className="nucleo">
        <header className="header">
          <h1 className="welcome">Bem-Vindo de volta, Vítor</h1>
          <div className="notificacao">
            <img
              src="https://img.icons8.com/ios/30/000000/bell.png"
              className="img"
              alt="Notificação"
            />
          </div>
          <img
            src={profile}
            alt="Imagem Perfil"
            className="img"
            id="profile"
          ></img>
        </header>
        <div className="containerTable">
          <ContainerTarefa className="container" />
          <ContainerTarefa className="container" />
          <ContainerTarefa className="container" />
          <ContainerTarefa className="container" />
          <ContainerTarefa className="container" />
        </div>
      </div>
    </>
  );
}
export default Menu;
