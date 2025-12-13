import { useState } from "react";
import "cally";
function CreateTaskModal() {
  const [isOpen, setIsOpen] = useState(false);
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
            <input type="text" className="input" placeholder="Título" />
            <label className="label">Descrição</label>
            <input type="text" className="input" placeholder="Descrição" />
            Data de Entrega
            <input type="date" />
            Status
            <div className="flex">
              <select name="status" className="select">
                <option value="pendente" disabled={true}>
                  Status
                </option>
                <option value="pendente">Pendente</option>
                <option value="em andamento">Em Andamento</option>
              </select>
            </div>
            Equipe
            <select name="status" className="select">
              <option value="pendente" disabled={true}>
                Equipe
              </option>
              <option value="pendente">Pendente</option>
            </select>
            <button className="btn btn-neutral mt-4">Criar</button>
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
