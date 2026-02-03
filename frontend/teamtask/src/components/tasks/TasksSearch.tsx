function TasksSearch({onChange}) {
  return (
    <div className="w-full max-w-xl m-1">
      <input
        type="text"
        className="input input-bordered w-full"
        placeholder="Pesquisar task..."
        onChange={onChange}
      />
    </div>
  );
}

export default TasksSearch;
