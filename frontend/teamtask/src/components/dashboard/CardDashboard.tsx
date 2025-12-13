import type { Task } from "../../utils/type";

function CardDashboard({ title, quantidade }: Task) {
  return (
    <div className="p-5 justify-items-center rounded-2xl shadow-xl">
      <h1 className="text-2xl font-bold">{title}</h1>
      <h2 className="text-5xl">{quantidade}</h2>
    </div>
  );
}

export default CardDashboard;
