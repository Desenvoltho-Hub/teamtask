import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";

function ModalLogin() {
  const [openModal, setOpenModal] = useState<boolean>();
  const {state, login, handleChange} = useContext(UserContext)
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
            <input type="email" className="input" placeholder="Email" name='email' onChange={(e) => handleChange(e)}/>

            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" name='password' onChange={(e) => handleChange(e)} />

            <button className="btn btn-neutral mt-4" onClick={() => login()}>Login</button>
            <button className="btn btn-primary" onClick={() => abrirModal()}>Fechar</button>
          </fieldset>
        </dialog>
      )}
    </>
  );
}

export default ModalLogin;
