function NavBar() {
    return ( 
        <div className="flex justify-between items-center">
            <div>

            <img src="/logoteamtasker.png" alt="" className="w-30" />
            </div>
            <div className="md:mr-100">
                <ul className="flex gap-20">
                    <li className="links">Dashboard</li>
                    <li className="links">Equipes</li>
                    <li className="links">Tasks</li>
                </ul>
            </div>
            
        </div>
     );
}

export default NavBar;