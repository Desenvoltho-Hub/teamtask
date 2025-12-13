function TasksHeader() {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-4xl md:text-5xl font-bold">Tasks</h1>
      <button className="btn btn-primary text-lg px-6">Nova Task</button>
    </div>
  );
}

export default TasksHeader;
