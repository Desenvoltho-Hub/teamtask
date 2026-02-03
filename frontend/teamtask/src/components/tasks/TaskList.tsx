import { useContext, useEffect, useState, type ChangeEvent } from 'react';
import TaskCard from './TaskCard'
import { TaskContext } from '../../contexts/TaskContext';
import TasksSearch from './TasksSearch';
function TasksList() {
 const {state, getTask} = useContext(TaskContext)
 useEffect(() => {
  getTask()
 }, [])
 const [task, setTask] = useState('')
 const buscarTask = (e: ChangeEvent<HTMLInputElement>) => {
  const termoBusca = e.target.value
  setTask(termoBusca.toLowerCase())
 }
 const taskFiltrada = state.task.filter(t => t.title.toLowerCase().includes(task))
 
  return (
    <div>
  
      <TasksSearch
      onChange={(e: ChangeEvent<HTMLInputElement>) => buscarTask(e)}
      />
       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      
      {taskFiltrada?.map(t => (

      <TaskCard 
      title={t.title}
      description={t.description}
      dataDeEntrega={t.dataDeEntrega}
      status={t.status}
      key={t._id}
      data={t.dataDeEntrega}
      prazo={t.prazo}
      _id={t.equipe}
        task={t._id}
        funcaoTask={t.funcao}
      />
      ))}
     
    </div>
    </div>
   
  );
}

export default TasksList;
