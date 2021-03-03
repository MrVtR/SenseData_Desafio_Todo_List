import './nucleoTarefas.scss';
import profile from '../../assets/icons/profile.jpg';
import ContainerTarefa from '../ContainerTarefa/containerTarefa';
import { useState } from 'react';

const container = {
  tipo: 'Gerência',
  descricao: 'teste',
};
export default function Menu() {
  const [itens, setItens] = useState([]);

  return (
    <>
      <div className="nucleo">
        <header className="header">
          <h1 className="welcome">Bem-Vindo de volta, Vítor</h1>
          <img
            src="https://img.icons8.com/wired/64/000000/plus.png"
            className="img"
            id="add"
            alt="Adicionar"
            onClick={() => {
              setItens((arrayAntigo) => [...arrayAntigo, container]);
            }}
          />
          <img
            src={profile}
            alt="Imagem Perfil"
            className="img"
            id="profile"
          ></img>
        </header>
        <div className="containerTable" id="table">
          {itens.map((item, index) => (
            <ContainerTarefa key={index} id={index} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
