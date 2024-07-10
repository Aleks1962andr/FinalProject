import './colontitul.css';
import logoInst from './Assets/instag.jpg'
import logoWatts from './Assets/watts.jpg'
import { Link } from "react-router-dom";

function Colontitul() {
    return (
     <div className='blockColontitul'>
     <div className='colomImg'>
     <img src="/image/logos.jpg" alt="Logo" className="logoColon" /> 
     </div>

     <div className="colontitul">
     <h2>Happy Pizza</h2>
     <h4>28 October Ave 327, Limassol 3106</h4>
     <h4>(+357) 77000757</h4>  
      </div>
      <Link to="/delivery">
      <div className='colontDelivery'>
       <h3>Доставка и оплата</h3> 
       </div>
       </Link>
       <Link to="/action">
      <div className='colontDelivery'>
      <h3>Акции</h3>  
      </div>
      </Link>
      <div className='colontDelivery'>
      <img src={logoInst} alt="LogoInst" className="logoColonIn" />  
      </div>
      <div className='colontDelivery'>
      <img src={logoWatts} alt="LogoWatts" className="logoColonIn" />  
      </div>
</div>     
    );
  }
  
  export default Colontitul;