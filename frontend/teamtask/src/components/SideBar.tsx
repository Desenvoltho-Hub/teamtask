function SideBar() {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label htmlFor="my-drawer-3" className="btn drawer-button lg:hidden">
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 min-h-full w-80 p-10 gap-10">
            {/* Sidebar content here */}
            <li className="text-2xl bg-primary rounded-xl border">
              <a>Dashboard</a>
            </li>
            <li className="text-2xl bg-primary rounded-xl border">
              <a>Equipes</a>
            </li>
            <li className="text-2xl bg-primary rounded-xl border">
              <a>Tarefas</a>
            </li>
            <li className="text-2xl bg-primary rounded-xl border">
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
