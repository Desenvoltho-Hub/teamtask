import { useContext, useEffect, useState } from "react";
import "cally";
import { TaskContext } from "../../contexts/TaskContext";
import { EquipeContext } from "../../contexts/EquipeContext";
function CreateTaskModal() {
  const { state, criarNovaTask, handleChange } = useContext(TaskContext);

  const [isOpen, setIsOpen] = useState(false);
  const { state: equipeState, equipeGet } = useContext(EquipeContext);
  useEffect(() => {
    equipeGet();
  }, []);
  const abrirModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button className="btn btn-primary" onClick={() => abrirModal()}>
        Nova Task
      </button>
      {isOpen && (
        <dialog open className="modal">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend className="fieldset-legend">Criar Task</legend>
            <label className="label">Título</label>
            <input
              type="text"
              className="input"
              placeholder="Título"
              name="title"
              value={state.novaTask.title}
              onChange={(e) => handleChange(e)}
            />
            <label className="label">Descrição</label>
            <input
              type="text"
              className="input"
              placeholder="Descrição"
              name="description"
              value={state.novaTask.description}
              onChange={(e) => handleChange(e)}
            />
            Data de Entrega
            <input
              type="date"
              name="dataDeEntrega"
              value={state.novaTask.dataDeEntrega}
              onChange={(e) => handleChange(e)}
            />
            Status
            <div className="flex">
              <select
                name="status"
                className="select"
                value={state.novaTask.status}
                onChange={(e) => handleChange(e)}
              >
                <option value="pendente" disabled={true}>
                  Status
                </option>
                <option value="pendente">Pendente</option>
                <option value="em andamento">Em Andamento</option>
              </select>
            </div>
            <label className="label">Equipe</label>
            <select
              name="equipe" 
              className="select"
              value={state.novaTask.equipe} 
              onChange={(e) => handleChange(e)}
            >
              <option value="" disabled>
                Selecione a equipe
              </option>
              {equipeState.equipe.map((e) => (
                <option key={e._id} value={e._id}>
                  {e.name}
                </option>
              ))}
            </select>
            <button
              className="btn btn-neutral mt-4"
              onClick={() => criarNovaTask()}
            >
              Criar
            </button>
            <button className="btn btn-primary" onClick={() => abrirModal()}>
              Fechar
            </button>
          </fieldset>
        </dialog>
      )}
    </>
  );
}

export default CreateTaskModal;
