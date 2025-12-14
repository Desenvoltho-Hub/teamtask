import ModalCadastro from "./home/ModalCadastro";
import ModalLogin from "./home/ModalLogin";

function Hero() {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">
              Organize sua equipe, potencialize sua produtividade
            </h1>
            <p className="py-6">
              Gerencie tarefas, acompanhe projetos e conecte sua equipe em um
              único lugar. Simples, rápido e eficiente — pronto para transformar
              a forma como você trabalha.
            </p>
            
              
            <ModalCadastro/>
            
            <ModalLogin />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
