import CreateTaskModal from "../components/tasks/CreateTask";
import TasksHeader from "../components/tasks/TaskHeader";
import TasksList from "../components/tasks/TaskList";
import TasksFilters from "../components/tasks/TasksFilter";
import TasksSearch from "../components/tasks/TasksSearch";


function Tasks() {
  return (
    <div className="px-6 py-10 space-y-8">
      <TasksHeader/>
      <TasksSearch />
      <TasksFilters />
      <TasksList />
      <CreateTaskModal />
    </div>
  );
}

export default Tasks;
