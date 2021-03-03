import './nucleoTarefas.scss';
import profile from '../../assets/icons/profile.jpg';
import ContainerTarefa from '../ContainerTarefa/containerTarefa';
import { useState } from 'react';

const container = {
  tipo: 'Gerência',
  descricao: 'Gerenciar Tarefas',
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
            onClick={openForm}
          />
          <img
            src={profile}
            alt="Imagem Perfil"
            className="img"
            id="profile"
          ></img>
        </header>
        <div className="containerTable" id="table">
          <div>
            <form id="form">
              <label htmlFor="tipo">
                <b>Tipo da Tarefa</b>
              </label>
              <input
                id="tipo"
                type="text"
                placeholder="Digite o tipo da Tarefa"
                name="tipo"
                required
              />
              <label htmlFor="descricao">
                <b>Descrição da Tarefa</b>
              </label>
              <input
                id="descricao"
                type="text"
                placeholder="Digite a descrição da Tarefa"
                name="descricao"
                required
              />
              <button
                type="button"
                className="btn"
                onClick={() => {
                  closeForm();
                  setItens((arrayAntigo) => [
                    ...arrayAntigo,
                    {
                      tipo: document.getElementById('tipo').value,
                      descricao: document.getElementById('descricao').value,
                    },
                  ]);
                }}
              >
                Inserir
              </button>
              <button type="button" className="btn cancel" onClick={closeForm}>
                Cancelar
              </button>
            </form>
          </div>
          {itens.map((item, index) => (
            <ContainerTarefa key={index} id={index} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

function openForm() {
  document.getElementById('form').style.display = 'block';
}
function closeForm() {
  document.getElementById('form').style.display = 'none';
}
