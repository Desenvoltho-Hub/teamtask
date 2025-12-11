import About from "../components/About";
import Hero from "../components/Hero";

function LadingPage() {
  return (  
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div>
        <img src="/logoteamtasker.png" alt="" />

      </div>
      <div>
      <Hero/>
      </div>
      <div>
        <About/>
      </div>
      <div >
        <img src="/pessoas.jpg" alt="" />
      </div>
      <div className="col-span-2">
        <img src="/features.png" alt="" />
      </div>
      <div className="col-span-2">
        <button className="btn btn-primary w-full">Começar Agora!</button>
      </div>
    </div>
  );
}

export default LadingPage;