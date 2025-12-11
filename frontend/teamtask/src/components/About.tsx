function About() {
  return (
    <div className="px-4 py-10">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6">
        Sobre o TeamTask
      </h1>
      <div className="mx-auto max-w-[90%] sm:max-w-md md:max-w-xl space-y-4 text-justify leading-relaxed text-base sm:text-lg md:text-xl">
        <p>
          O TeamTask foi criado para simplificar a forma como equipes gerenciam
          tarefas e projetos. Com uma interface intuitiva e recursos inteligentes,
          você consegue acompanhar o progresso de cada tarefa, colaborar em tempo
          real e manter sua equipe totalmente alinhada.
        </p>
        <p>
          Nosso objetivo é que você passe menos tempo organizando e mais tempo
          produzindo. Com o TeamTask, produtividade e organização caminham lado
          a lado, garantindo resultados mais rápidos e equipes mais conectadas.
        </p>
      </div>
    </div>
  );
}

export default About;
