import Apropos from "./about"
import Equipe from "./equip";
import Debouches from "./debouche";
function App() {
 return ( 
   <><nav className="flex flex-row justify-between bg-blue-950 p-4 py-10 overflow-x-hidden"><div><img src="src/hei.png" className="w-20 h-15 ml-20 mt-0" alt="" /></div><div className="text-lg font-bold"></div>
      <ul className="flex justify-end space-x-7 mr-10 text-xl font-medium text-white ">
        <li><a href="" className="hover:text-gray-300 text-amber-500">ACCUEIL</a></li>
        <li><a href="" className="hover:text-gray-300">ACTUALITES</a></li>
        <li><a href="" className="hover:text-gray-300">BOURSES D'ETUDES</a></li>
        <li><a href="" className="hover:text-gray-300">INSCRIPTION</a></li>
        <li><a href="" className="hover:text-gray-300 bg-amber-500 px-3 py-2 rounded-sm">INTRANET</a></li>
      </ul> 
    </nav>
    <div className="h-screen w-full overflow-x-hidden " style={{backgroundImage:"url('hosst.jpg')"}}>
      {} <div className="absolute inset-0 bg-opacity-60"></div>
      
        <div className=" absolute w-screen overflow-x-hidden text-center mx-auto pt-30"><h1 className="text-6xl text-white font-bold">Haute Ecole d'Informatique</h1><br /><p className="text-white text-xl mx-30 font-semibold my-20">"Une infrastructure de qualité et un programme pédagogique qui répond au besoin de marché pour l'employabilité de nos étudiants"</p>
          <div className="w-full flex space-x-30 mx-35"><span className="bg-white px-8 py-3 rounded-sm text-xl font-semibold">Inscrivez-vous içi</span>
              <span className="bg-amber-500 px-8 py-3 rounded-sm text-xl font-semibold text-white">Emploi du temps</span>
              <span className="bg-white px-8 py-3 rounded-sm text-xl font-semibold">Programme pédagogique</span>
            <br />
              
          </div>
          <p className="text-white text-xl mx-80 font-semibold my-12 text-justify">Habilitation par MESupRES,suivant l'arreté n°31309/2023</p>
        </div> 
    </div>
   
    <div><Apropos/></div>

    <div><Equipe/></div>

     <div><Debouches/></div>


    

    
    </> 
    
 )
    
  
}

export default App;

