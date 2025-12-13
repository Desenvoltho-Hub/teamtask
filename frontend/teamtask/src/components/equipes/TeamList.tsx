import { useContext, useEffect } from "react";
import TeamCard from "./TeamCard";
import { EquipeContext } from "../../contexts/EquipeContext";
import AddMemberModal from "./AddMemberModal";


function TeamList() {
  const {state, equipeGet, } = useContext(EquipeContext)
  
  useEffect(() => {
    equipeGet()
  
  }, [])
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {state.equipe?.length ? (
  state.equipe.map(e => (
    <>
    <TeamCard 
      equipeId={e._id}
      key={e._id}
      name={e.name}
      description={e.description}
      members={e.members.length}
      />
      </>
  ))
) : (
  <div>Carregando equipes...</div>
)}
     
     
      

    </div>
  );
}

export default TeamList;
