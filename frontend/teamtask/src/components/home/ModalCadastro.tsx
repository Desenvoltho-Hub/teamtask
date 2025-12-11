import Cadastro from "./Cadastro";

function ModalCadastro() {
    return (
    
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn btn-primary"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        Começar
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Cadastro</h3>
         <Cadastro/>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default ModalCadastro;
