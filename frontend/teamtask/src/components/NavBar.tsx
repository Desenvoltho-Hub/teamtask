function NavBar() {
  return (
    <div className="bg-secondary flex justify-between p-2 items-center">
      <img src="/logoteamtasker.png" alt="logo" className="w-28 md:ml-20" />
      <div>
        <span>
          <span className="text-rotate text-3xl font-bold">
            <span>
              <span >ORGANIZE SUAS IDEIAS...</span>
              <span>ORGANIZE SUA EQUIPE...</span>
              <span>ORGANIZE SUAS TAREFAS...</span>
            </span>
          </span>
        </span>
      </div>
    </div>
  );
}

export default NavBar;
