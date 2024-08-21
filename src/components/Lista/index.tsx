import Item from './Item'
import styles from './lista.module.scss'

export default function  Lista(){

  const tarefas = [
    {tarefa: "React", tempo:"02:00:00"},
    {tarefa: "Javascript", tempo:"01:00:00"},
    {tarefa: "TypeScript", tempo:"03:00:00"}
  ]
  return(
    <aside className={styles.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul >
        {tarefas.map((item, index) =>(
          <Item key={index} {...item}/>
        ))}
      </ul>
    </aside>
  )
}