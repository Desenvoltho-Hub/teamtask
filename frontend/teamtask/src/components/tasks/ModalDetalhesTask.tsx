import { useContext, useEffect, useState } from "react";
import { TaskContext } from "../../contexts/TaskContext";
import type { Task } from "../../utils/type";
import { useEquipeTask } from "../../hooks/useEquipeTask";

function ModalDetalhesEquipe({eqp, title}) {
  const {equipe, buscarEquipe} = useEquipeTask('')
  const [openModal, setOpenModal] = useState(false);
  const abrirModal = () => setOpenModal(!openModal)
useEffect(() => {
  buscarEquipe(eqp)
}, [])
  return (
    <>
      <button className="btn btn-primary" onClick={abrirModal}>
        + Detalhes
      </button>

      {openModal && (
        <dialog open className="modal max-w-4xl w-full p-0">
          <div className="bg-base-100 rounded-xl shadow-lg overflow-hidden flex flex-col">

            {/* Cabeçalho */}
            <div className="flex justify-between items-center p-5 border-b border-base-content/10">
              <div>
                {!equipe ? ( 
                  <h1>Carregando...</h1>
                ) : (

                <h1 className="text-3xl md:text-4xl font-bold">{equipe?.name}</h1>
                )}
                <p className="text-base-content/70">Detalhes e participantes da task: <strong>{title}</strong></p>
              </div>
              <button
                className="btn btn-ghost text-3xl hover:bg-base-300"
                onClick={abrirModal}
              >
                ✕
              </button>
            </div>

            {/* Corpo */}
            <div className="p-5 overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Membro</th>
                    <th>Função</th>
                 
                    <th className="text-center">Ações</th>
                  </tr>
                </thead>
                <tbody>
              
                    <tr >
                     
                      <th></th>
                      <td className="flex items-center gap-2">
                       
                      ae
                       
                      </td>
                      <td className="break-words max-w-[120px] md:max-w-full">

                      </td>
                      <td>
                      
                      </td>
                      <td className="flex flex-col md:flex-row gap-2 justify-center">
                       
                        <button className="btn btn-sm btn-warning">Remover</button>
                      </td>
                    </tr>
                  
                </tbody>
              </table>
            </div>

            {/* Rodapé */}
            <div className="flex flex-col md:flex-row justify-end p-5 border-t border-base-content/10 gap-2">
              <button className="btn btn-neutral" onClick={abrirModal}>
                Fechar
              </button>
              <button className="btn btn-primary">Adicionar Membro</button>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}

export default ModalDetalhesEquipe;
