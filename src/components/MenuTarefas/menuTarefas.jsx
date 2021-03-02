import './menuTarefas.scss';
import { ContadorTarefas } from '../../services/export';
function menuTarefas() {
  return (
    <div className="menuTarefas">
      <h1 className="Header">Tarefas</h1>
      <ContadorTarefas name="All Tasks" background="red" cont="10" />
      <ContadorTarefas name="All Tasks" background="red" cont="10" />
      <ContadorTarefas name="All Tasks" background="red" cont="10" />
      <ContadorTarefas name="All Tasks" background="red" cont="10" />
      <ContadorTarefas name="All Tasks" background="red" cont="10" />
      <ContadorTarefas name="All Tasks" background="red" cont="10" />
      <ContadorTarefas name="All Tasks" background="red" cont="10" />
      <ContadorTarefas name="All Tasks" background="red" cont="10" />
    </div>
  );
}
export default menuTarefas;
