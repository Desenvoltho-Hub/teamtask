import { ChangeEvent, useContext, useState } from "react";
import { useValidation } from "../../hooks/validation";
import { EquipeContext } from "../../contexts/EquipeContext";

function CriarEquipeModal() {
  const [isOpen, setIsOpen] = useState(false);
  const { handleChange, criarEquipe, state } = useContext(EquipeContext);
  const { validar, title, alerta, enable, setTitle } = useValidation();
  return (
    <div>
      <button className="btn btn-primary" onClick={() => setIsOpen(true)}>
        Criar Equipe
      </button>

      {isOpen && (
        <dialog open className="modal">
          <div className="modal-box">
            <h1>Criar equipe</h1>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4 ">
              <label className="label">Nome</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Nome"
                name="name"
                value={state.novaEquipe.name}
                onChange={(e) => {
                  validar(e.target.value);
                  handleChange(e);
                }}
              />
              <div>
                {title?.length}/20
                {alerta}
              </div>
              <label className="label">Descrição</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Descrição"
                value={state.novaEquipe.description}
                name="description"
                onChange={handleChange}
              />

              <button
                className="btn btn-neutral mt-4"
                disabled={enable}
                onClick={() => criarEquipe()}
              >
                Salvar
              </button>
              <button
                className="btn btn-primary w-full"
                onClick={() => {
                  setIsOpen(false);
                  setTitle("");
                }}
              >
                Fechar
              </button>
            </fieldset>
          </div>
        </dialog>
      )}
    </div>
  );
}

export default CriarEquipeModal;
