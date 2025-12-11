import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

function Cadastro() {
  const { state, handleChange, cadastrar } = useContext(UserContext);
  return (
    <div>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
        <label className="label">Nome</label>
        <input
          type="text"
          className="input w-full"
          placeholder="Nome"
          name="name"
          value={state.user.name}
          onChange={handleChange}
        />
        <label className="label">Email</label>
        <input
          type="email"
          className="input w-full"
          placeholder="Email"
          name="email"
          value={state.user.email}
          onChange={(e) => handleChange(e)}
        />

        <label className="label">Password</label>
        <input
          type="password"
          className="input w-full"
          placeholder="Password"
          name="password"
          value={state.user.password}
          onChange={(e) => handleChange(e)}
        />

        <button className="btn btn-neutral mt-4" onClick={() => cadastrar()}>Cadastrar</button>
      </fieldset>
    </div>
  );
}

export default Cadastro;
