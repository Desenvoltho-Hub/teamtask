import { useContext, useState } from "react";
import CreateTaskModal from "./CreateTask";
import { EquipeContext } from "../../contexts/EquipeContext";

function TasksHeader() {
  const {state} = useContext(EquipeContext)
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-4xl md:text-5xl font-bold">Tasks</h1>
     
      
    </div>
  );
}

export default TasksHeader;
