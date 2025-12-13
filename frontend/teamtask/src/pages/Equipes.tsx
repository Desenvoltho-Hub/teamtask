import TeamSearch from "../components/equipes/TeamSearch";
import TeamList from "../components/equipes/TeamList";
import AddMemberModal from "../components/equipes/AddMemberModal";
import ConfirmDeleteModal from "../components/equipes/ConfirmDeleteModal";
import CriarEquipeModal from "../components/equipes/CriarEquipeModal";

function Equipes() {
  return (
    <div className="px-6 py-10 space-y-8">
      <h1 className="text-4xl md:text-5xl font-bold">Equipes</h1>
    <CriarEquipeModal/>
  
      <TeamSearch />


      <TeamList />

    
      <ConfirmDeleteModal />
    </div>
  );
}

export default Equipes;
