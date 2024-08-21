import Button from "../button";
import Relogio from "./Relogio";
import styles from './cronometro.module.scss'

export default function Cronometro(){
  return(
    <div className={styles.cronometro}>
      <p className={styles.titulo}>Escolha um card e inicie um cronômetro</p>
      <div className={styles.relogioWrapper}>
        <Relogio />
      </div>
      <Button texto="Iniciar"/>
    </div>
  )
}