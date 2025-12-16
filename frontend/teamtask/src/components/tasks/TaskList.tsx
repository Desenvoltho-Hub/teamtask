import { useContext, useEffect } from 'react';
import TaskCard from './TaskCard'
import { TaskContext } from '../../contexts/TaskContext';
function TasksList() {
 const {state, getTask} = useContext(TaskContext)
 useEffect(() => {
  getTask()
 }, [])
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {state.task?.map(t => (

      <TaskCard 
      title={t.title}
      description={t.description}
      dataDeEntrega={t.dataDeEntrega}
      status={t.status}
      key={t._id}
      data={t.dataDeEntrega}
      prazo={t.prazo}
  
      />
      ))}
     
    </div>
  );
}

export default TasksList;
