import './Home.scss';
import { Menu, MenuTarefas } from '../../services/export';
function Home() {
  console.log('Home');
  return (
    <div className="Home">
      <Menu />
      <MenuTarefas />
    </div>
  );
}

export default Home;
