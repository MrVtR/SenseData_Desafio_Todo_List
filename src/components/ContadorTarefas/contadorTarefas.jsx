import './contadorTarefas.scss';
export default function ContadorTarefas(props) {
  const { name, background, cont } = props;
  return (
    <div className="contador">
      <h3 className="name">{name}</h3>
      <h4 className="cont" style={{ backgroundColor: background }}>
        {cont}
      </h4>
    </div>
  );
}
