import Cronometro from '../components/Cronometro';
import Formulario from '../components/formulario';
import Lista from '../components/Lista';
import styles from './app.module.scss'

function App() {
  return (
    <div className={styles.AppStyle}>
      <Formulario />
      <Lista />
      <Cronometro />
    </div>
  );
}

export default App;
