import './contadorTarefas.scss';
export default function ContadorTarefas(props) {
  const { name, background } = props;
  return (
    <div className="contador">
      <h3 className="name">{name}</h3>
      <h4 className="cont" style={{ backgroundColor: background }}></h4>
    </div>
  );
}
