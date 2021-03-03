import './nucleoTarefas.scss';
import profile from '../../assets/icons/profile.jpg';
import ContainerTarefa from '../ContainerTarefa/containerTarefa';
import { useEffect, useState } from 'react';

export default function Menu() {
  const storage = () =>
    Array.from(JSON.parse(localStorage.getItem('itens') || []));
  // const [itens, setItens] = useState([storage]);
  const [itens, setItens] = useState([]);

  useEffect(() => {
    localStorage.setItem('itens', JSON.stringify(itens));
  }, [itens]);

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
        <div id="formDiv">
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
                if (
                  document.getElementById('tipo').value === '' ||
                  document.getElementById('descricao').value === ''
                )
                  alert('Preencha todos os campos por favor.');
                else {
                  setItens((arrayAntigo) => [
                    ...arrayAntigo,
                    {
                      tipo: document.getElementById('tipo').value,
                      descricao: document.getElementById('descricao').value,
                    },
                  ]);
                  // localStorage.setItem('itens', JSON.stringify(itens));
                  // console.log(JSON.parse(localStorage.getItem('itens')));
                  // console.log(itens);
                  closeForm();
                }
              }}
            >
              Inserir
            </button>
            <button type="button" className="btn cancel" onClick={closeForm}>
              Cancelar
            </button>
          </form>
        </div>
        <div className="containerTable" id="table">
          {itens.map((item, index) => (
            <ContainerTarefa key={index} id={index} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

function openForm() {
  document.getElementById('formDiv').style.display = 'flex';
}
function closeForm() {
  document.getElementById('formDiv').style.display = 'none';
}
