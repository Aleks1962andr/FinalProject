import { useState, useEffect, useContext } from 'react';
import { dataaction } from './DataAction';
import { useParams, useNavigate } from 'react-router-dom';
import './cartaction.css';

function CartAction() {
    const navigate = useNavigate();
    const { titleac } = useParams();
    const [overlayActive, setOverlayActive] = useState(false);
   
  
    useEffect(() => {
        setOverlayActive(true);
        return () => setOverlayActive(false);
    }, []);

    const formatContent = (content) => {
        return content.split('\n\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ));
      };
    

    return (
        <div className={`container ${overlayActive ? 'overlay-active' : ''}`}>
            <div className="overlay" onClick={() => setOverlayActive(false)}></div>
            {dataaction.filter((item) => item.titleac === titleac).map((elem, elemId) => (
              
                <div key={elemId} className='blockCartAction'>
                    <div>
                        <img src={process.env.PUBLIC_URL + elem.imageac} width="400px" alt="foto" className='cartActionImg'/>
                    </div>
                    <div className='titlCartAction'>
                        <h3>{elem.titleac}</h3>
                        </div>
                        <div className='titlcontCartAction'>
                        {formatContent(elem.contentac)}
                    </div>
                    
                    <div className='butCart'>
                        <button className='butCartAction' onClick={() => navigate(-1)}>НАЗАД</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CartAction;