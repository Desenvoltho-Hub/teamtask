import { useState } from "react";
import { useAddMembro } from "../../hooks/useAddMebro";
import type { Equipe } from "../../utils/type";

function AddMemberModal({_id}) {
  const [openModal, setOpenModal] = useState(false);
  const { adicionarMembro, handleChange, email } = useAddMembro();
  const abrirModal = () => {
    setOpenModal(true);
  };
  const fecharModal = () => {
    setOpenModal(false);
  };
  return (
    <>
      <button className="btn btn-primary" onClick={() => abrirModal()}>
        + Adicionar Membro
      </button>
      {openModal && (
        <dialog open className="modal">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend className="fieldset-legend">Aicionar</legend>

            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Email"
              value={email}
              onChange={(e) => handleChange(e.target.value)}
            />

            <button
              className="btn btn-neutral mt-4"
              onClick={() => adicionarMembro(_id)}
            >
              Adicionar
            </button>
            <button className="btn btn-primary" onClick={() => fecharModal()}>
              Fechar
            </button>
          </fieldset>
        </dialog>
      )}
    </>
  );
}

export default AddMemberModal;
