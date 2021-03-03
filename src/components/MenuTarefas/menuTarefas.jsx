import './menuTarefas.scss';
import { ContadorTarefas } from '../../services/export';
export default function menuTarefas() {
  return (
    <div className="menuTarefas">
      <h1 className="Header">Lista de Tarefas</h1>
      <ContadorTarefas name="Todas as Tarefas" background="#172b4d" cont="10" />
      <ContadorTarefas name="Gerência" background="#1665d8" cont="10" />
      <ContadorTarefas name="Vendas" background="#f6c056" cont="10" />
      <ContadorTarefas name="Operações" background="#f85252" cont="10" />
      <ContadorTarefas name="Marketing" background="#6f48e1" cont="10" />
      <ContadorTarefas name="Recursos Humanos" background="#f19445" cont="10" />
      <ContadorTarefas name="Finanças" background="#60c354" cont="10" />
      <ContadorTarefas
        name="Serviço ao Consumidor"
        background="#aa44f6"
        cont="10"
      />
    </div>
  );
}
