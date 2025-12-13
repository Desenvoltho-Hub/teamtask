function Footer() {
  return (
    <footer className="bg-base-200 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        <div className="space-y-3">
          <h2 className="text-2xl font-bold">TeamTask</h2>
          <p className="text-base-content/70">
            Organize sua equipe, aumente sua produtividade e gerencie tudo em um único lugar.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold">Produto</h3>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">Dashboard</li>
            <li className="hover:underline cursor-pointer">Equipes</li>
            <li className="hover:underline cursor-pointer">Tasks</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold">Empresa</h3>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">Sobre</li>
            <li className="hover:underline cursor-pointer">Contato</li>
            <li className="hover:underline cursor-pointer">Carreiras</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold">Redes</h3>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">GitHub</li>
            <li className="hover:underline cursor-pointer">LinkedIn</li>
            <li className="hover:underline cursor-pointer">Instagram</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-base-300 pt-5 text-center text-base-content/60">
        © 2025 TeamTask. Todos os direitos reservados.
      </div>
    </footer>
  );
}

export default Footer;
