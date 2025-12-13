import { Users, Plus, Trash } from "lucide-react";
import { EquipeContext } from "../../contexts/EquipeContext";
import { useContext } from "react";
import type { Card } from "../../utils/type";
import AddMemberModal from "./AddMemberModal";


function TeamCard({name, equipeId, description, members}: Card) {

  const {deletarEquipe} = useContext(EquipeContext)
  return (
    <div className="p-6 rounded-2xl bg-base-200 shadow-sm hover:shadow-md transition">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">{name}</h2>
        <button className="btn btn-sm btn-error btn-circle" onClick={() => deletarEquipe(equipeId)}>
          <Trash size={18} />
        </button>
      </div>
      <div>{description}</div>
      <div className="flex items-center gap-2 mb-4">
        <Users />
        <span className="text-lg">{members} membros</span>
      </div>
      <AddMemberModal
      _id={equipeId}
      />
     
    </div>
  );
}

export default TeamCard;
