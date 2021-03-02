import './Home.scss';
import { Menu, MenuTarefas, NucleoTarefas } from '../../services/export';
function Home() {
  console.log('Home');
  return (
    <div className="Home">
      <Menu />
      <MenuTarefas />
      <NucleoTarefas />
    </div>
  );
}

export default Home;
