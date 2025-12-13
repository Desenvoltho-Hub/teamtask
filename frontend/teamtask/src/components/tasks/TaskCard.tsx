import { CheckCircle, Clock, Flag } from "lucide-react";

function TaskCard() {
  return (
    <div className="p-6 bg-base-200 rounded-2xl shadow-sm hover:shadow-md transition cursor-pointer">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-xl font-semibold">Criar layout da Dashboard</h2>
        <Flag size={20} className="text-primary" />
      </div>

      <p className="text-base-content/70 mb-4">
        Definir estrutura inicial da dashboard com cards de status e gráficos.
      </p>

      <div className="flex justify-between items-center text-sm">
        <div className="flex items-center gap-2">
          <Clock size={16} />
          <span>Vence em 2 dias</span>
        </div>

        <div className="flex items-center gap-2">
          <CheckCircle size={16} className="text-success" />
          <span>Em andamento</span>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
