import './containerTarefa.scss';

export default function ContainerTarefa({ id, item }) {
  const corS = cor(item.tipo);
  console.log(corS);
  return (
    <>
      <div className="container">
        <div className="color" id={id} style={{ backgroundColor: corS }}></div>
        <div className="assunto">
          <h3 style={{ backgroundColor: corS }}>{item.tipo}</h3>
        </div>
        <p className="description">{item.descricao}</p>
        <img
          src="https://img.icons8.com/dusk/64/000000/trash.png"
          alt="Trash"
          className="img"
        />
      </div>
    </>
  );
}
function cor(tipo) {
  switch (tipo) {
    case 'Gerência':
      return '#1665d8';
    case 'Vendas':
      return '#f6c056';
    case 'Operações':
      return '#f85252';
    case 'Marketing':
      return '#6f48e1';
    case 'Recursos Humanos':
      return '#f19445';
    case 'Finanças':
      return '#60c354';
    case 'Serviço ao Consumidos':
      return '#aa44f6';
    default:
      return '#172b4d';
  }
}
