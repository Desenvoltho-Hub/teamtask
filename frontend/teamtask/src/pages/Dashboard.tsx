import CardMeusGrupos from "../components/dashboard/CardMeusGrupos";

function Dashboard() {
    return (  
        <div className="p-5">
            <div className='grid grid-cols-2'>
                <div>

            <span className="text-5xl font-bold">Grupos...</span>
            <CardMeusGrupos/>
                </div>

            </div>
        </div>
    );
}

export default Dashboard;