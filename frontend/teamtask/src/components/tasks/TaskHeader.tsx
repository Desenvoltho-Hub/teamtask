import CreateTaskModal from "./CreateTask";

function TasksHeader() {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-4xl md:text-5xl font-bold">Tasks</h1>
      <CreateTaskModal/>
    </div>
  );
}

export default TasksHeader;
