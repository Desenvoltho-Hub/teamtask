import TaskCard from './TaskCard'
function TasksList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      <TaskCard />
      <TaskCard />
      <TaskCard />
    </div>
  );
}

export default TasksList;
