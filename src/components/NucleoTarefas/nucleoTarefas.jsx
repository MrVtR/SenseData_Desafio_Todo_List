import './nucleoTarefas.scss';
import profile from '../../assets/icons/profile.jpg';
function Menu() {
  return (
    <>
      <div className="nucleo">
        <header>
          <img src={profile} alt="Imagem Perfil" className="profile"></img>
        </header>
        <h1 className="X">Bem-Vindo de volta, Vítor</h1>
      </div>
    </>
  );
}
export default Menu;
