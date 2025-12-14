import { useState } from "react";

function ModalLogin() {
  const [openModal, setOpenModal] = useState();
  const abrirModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <>
      <button className="btn btn-primary mt-5" onClick={() => abrirModal()}>
        Login
      </button>
      {openModal && (
        <dialog open className="modal">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend className="fieldset-legend">Login</legend>

            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />

            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />

            <button className="btn btn-neutral mt-4">Login</button>
            <button className="btn btn-primary" onClick={() => abrirModal()}>Fechar</button>
          </fieldset>
        </dialog>
      )}
    </>
  );
}

export default ModalLogin;
