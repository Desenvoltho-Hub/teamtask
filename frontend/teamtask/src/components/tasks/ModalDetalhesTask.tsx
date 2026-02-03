import { useEffect, useState } from "react";
import { useEquipeTask } from "../../hooks/useEquipeTask";
import type { Task } from "../../utils/type";
import { useFuncao } from "../../hooks/useFuncao";

function ModalDetalhesTask({ title, _id, task, funcaoTask }: Task) {
  const [modal, setModal] = useState(false);
  const [membro, setMembro] = useState("");
  const [funcao, setFuncao] = useState("");
  const { equipe, buscarEquipe, designarFuncao } = useEquipeTask();
  const { buscarFuncao, funcaoGet, deletarFuncao } = useFuncao();
  const abrirModal = () => setModal((prev) => !prev);
  useEffect(() => {
    buscarFuncao(task);
    buscarEquipe(_id);
  }, []);
  return (
    <>
      <button className="btn btn-primary" onClick={abrirModal}>
        + Detalhes
      </button>

      {modal && (
        <dialog open className="modal">
          <div className="bg-base-100 w-full max-w-4xl rounded-2xl shadow-xl overflow-hidden">
            {/* HEADER */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-base-content/10">
              <div>
                <h1 className="text-2xl font-bold">
                  Detalhes da Task: {title}{" "}
                </h1>
                <p className="text-sm text-base-content/70">
                  Gerencie membros e funções da equipe:{" "}
                  <strong>{equipe?.name}</strong>
                </p>
              </div>

              <button onClick={abrirModal} className="btn btn-ghost text-2xl">
                ✕
              </button>
            </div>

            {/* BODY */}
            <div className="p-6 space-y-6">
              {/* FORM */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <fieldset className="space-y-2">
                  <label className="label font-semibold">Membros</label>
                  <select
                    className="select select-bordered w-full"
                    onChange={(e) => setMembro(e.target.value)}
                  >
                    <option disabled selected>
                      Escolher membro
                    </option>
                    {equipe?.members?.map((m) => (
                      <option value={m._id}>{m.name}</option>
                    ))}
                  </select>
                </fieldset>

                <fieldset className="space-y-2">
                  <label className="label font-semibold">Função</label>
                  <input
                    type="text"
                    placeholder="Ex: Desenvolvedor, Designer..."
                    className="input input-bordered w-full"
                    onChange={(e) => setFuncao(e.target.value)}
                  />
                </fieldset>
              </div>

              {/* TABLE */}
              <div className="overflow-x-auto rounded-xl border border-base-content/10">
                <table className="table table-zebra">
                  <thead>
                    <tr>
                      <th>Membro</th>
                      <th>Função</th>
                      <th className="text-center">Ações</th>
                    </tr>
                  </thead>
                  {funcaoGet?.map((f) => (
                    <tbody>
                      <tr>
                        <td>{f.user.name}</td>
                        <td>{f.title}</td>
                        <td className="text-center">
                          <button
                            className="btn btn-xs btn-warning"
                            onClick={() => deletarFuncao(f._id)}
                          >
                            Remover
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </div>
            </div>

            {/* FOOTER */}
            <div className="flex justify-end gap-2 px-6 py-4 border-t border-base-content/10">
              <button className="btn btn-neutral" onClick={abrirModal}>
                Fechar
              </button>
              <button
                className="btn btn-primary"
                onClick={() => designarFuncao(task, membro, funcao)}
              >
                Salvar alterações
              </button>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}

export default ModalDetalhesTask;
