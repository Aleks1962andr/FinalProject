import { dataaction } from "./dataAction";    
import { useNavigate } from 'react-router-dom';
import './action.css';
import { Link } from "react-router-dom";



function Action() {
  const navigate = useNavigate();
  
  return (
<div className="action"> 
      <div className="action2" >
     <h1>АКЦИИ</h1>  
      </div>
      <div className="action1">  
      {dataaction.map((elem) => (
                <div key={elem.id} className="actionBlock">
                    <div>
                        <img src={process.env.PUBLIC_URL + elem.imageac} width="400px" alt="foto" className="actionImage"/>
                    </div>
                    <div className='titlAction'>
                        <h3>{elem.titleac}</h3>
                     </div>
            
                    <div className='butAct'>
                        <button className='butActionNav' onClick={() => navigate('/')}>Вернуться в меню</button>
                        <Link to={`/cartaction/${elem.titleac}`}>   
                        <button className='butActionNext' >Подробнее</button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
       
        </div>
        
    );

  }
  
  export default Action;