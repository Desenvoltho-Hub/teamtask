import { useContext, useEffect, useState } from "react";
import { EquipeContext } from "../../contexts/EquipeContext";
import type { Task } from "../../utils/type";

function ModalEdicaoTask({ title, description, dataDeEntrega, status }: Task) {
  const [openModal, setOpenModal] = useState(false);
  const { state: equipeState, equipeGet } = useContext(EquipeContext);
  useEffect(() => {
    equipeGet();
  }, []);
  const abrirEditor = () => {
    setOpenModal(!openModal);
  };
  return (
    <>
      <button onClick={() => abrirEditor()} className="btn btn-primary">
        Editar
      </button>
      {openModal && (
        <dialog open className="modal">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend className="fieldset-legend">Editar Task</legend>
            <label className="label">Título</label>
            <input
              type="text"
              className="input"
              placeholder="Título"
              name="title"
              value={title}
            />
            <label className="label">Descrição</label>
            <input
              type="text"
              className="input"
              placeholder="Descrição"
              name="description"
              value={description}
            />
            Data de Entrega
            <input type="date" name="dataDeEntrega" 
            value={dataDeEntrega}
            />
            Status
            <div className="flex">
              <select name="status" className="select">
                <option value={status} disabled={true}>
                  Status
                </option>
                <option value="pendente">Pendente</option>
                <option value="em andamento">Em Andamento</option>
              </select>
            </div>
            <label className="label">Equipe</label>
            <select name="equipe" className="select">
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
              Editar
            </button>
            <button className="btn btn-primary" onClick={() => abrirEditor()}>
              Fechar
            </button>
          </fieldset>
        </dialog>
      )}
    </>
  );
}

export default ModalEdicaoTask;
