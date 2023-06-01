import './App.css';
import Agilidade from './Componentes/Agilidade';
import Banner from './Componentes/Banner/Banner';
import BotaoScroll from './Componentes/BotaoScroll';
import Formulario from './Componentes/Formulario';
import Quem from './Componentes/Quem';
import SaberMais from './Componentes/SaberMais';

function App() {

  return (
    <div className='projeto'>   
       <Banner />
       <BotaoScroll/>
       <Quem/>
       <SaberMais/>
       <Agilidade/>
       <Formulario/>
    </div>
  );
}

export default App;
