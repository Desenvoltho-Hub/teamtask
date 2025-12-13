function TasksFilters() {
  return (
    <div className="flex flex-wrap gap-3">
      <button className="btn btn-outline">Todas</button>
      <button className="btn btn-outline">Pendentes</button>
      <button className="btn btn-outline">Em andamento</button>
      <button className="btn btn-outline">Concluídas</button>
    </div>
  );
}

export default TasksFilters;
