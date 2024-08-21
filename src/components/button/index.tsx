import styles from './button.module.scss'

interface ButtonProps{
  texto: string;
}

export default function Button({texto}:ButtonProps){
  return(
    <button className={styles.botao}>
      {texto}
    </button>
  )
}