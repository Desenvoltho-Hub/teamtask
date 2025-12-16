import { CheckCircle, Clock, Flag } from "lucide-react";
import ModalDetalhesTask from "./ModalDetalhesTask";
import type { Task } from "../../utils/type";


import { usePrazo } from "../../hooks/usePrazoTask";
import { useEffect } from "react";


function TaskCard({title, description, dataDeEntrega,status, task,equipe, data,  funcaoTask, _id}: Task) {
  const {prazo, buscarPrazo} = usePrazo()
 
  useEffect(() => {
    buscarPrazo(data)
  }, [])
  return (
    <div className="p-6 bg-base-200 rounded-2xl shadow-sm hover:shadow-md transition cursor-pointer">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-xl font-semibold">{title}</h2>
        <Flag size={20} className="text-primary" />
      </div>

      <p className="text-base-content/70 mb-4">
        {description}
      </p>

         <span>Prazo: {prazo}</span>
      <div className="flex justify-between items-center text-sm">
        <div className="flex items-center gap-2">
          <Clock size={16} />
          <span>{dataDeEntrega}</span>
        </div>
          Status: <br />{status}
        <div className="flex items-center gap-2">
          <CheckCircle size={16} className="text-success" />
          <ModalDetalhesTask 
          title={title}
          _id={_id}
          task={task}
          funcaoTask={funcaoTask}
       
          />
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
