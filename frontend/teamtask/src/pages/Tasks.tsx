import CreateTaskModal from "../components/tasks/CreateTask";
import TasksHeader from "../components/tasks/TaskHeader";
import TasksList from "../components/tasks/TaskList";




function Tasks() {
  
  return (
    <div className="px-6 py-10 space-y-8">
      <TasksHeader/>
      <CreateTaskModal/>
     
      
      <TasksList />
  
    </div>
  );
}

export default Tasks;
