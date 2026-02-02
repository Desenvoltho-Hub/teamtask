import { useState } from "react";

function EditarEquipeModal() {
  const [openModal, setOpenModal] = useState<boolean>();
  const abrirModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <div>
      <button onClick={() => abrirModal()} className='btn btn-primary'>Editar</button>
      {openModal && (
        <dialog open className="modal">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend className="fieldset-legend">Editar Equipe</legend>
            <label className="label">Nome da Equipe</label>
            <input type="text" className="input" placeholder="Nome da Equipe" />
            <div className="modal-action">
                
            </div>
          </fieldset>
        </dialog>
      )}
    </div>
  );
}

export default EditarEquipeModal;
