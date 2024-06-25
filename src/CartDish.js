import { useState, useEffect, useContext } from 'react';
import { data } from './Data';
import { useParams, useNavigate } from 'react-router-dom';
import { OrderContext } from './OrderContext';
import LoaderPage from './Loader/LoaderPage';

function CartDish() {
    const navigate = useNavigate();
    const { title } = useParams();
    const [overlayActive, setOverlayActive] = useState(false);
    const [sum, setSum] = useState(1);
    const { addToOrder } = useContext(OrderContext);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setOverlayActive(true);
        return () => setOverlayActive(false);
    }, []);

    const increment = () => setSum(prevSum => prevSum + 1);
    const decrement = () => setSum(prevSum => prevSum > 1 ? prevSum - 1 : prevSum);

    const handleAddToOrder = (dish) => {
        setLoading(true);
        setTimeout(() => {
            addToOrder({ ...dish, quantity: sum });
            setLoading(false);
        }, 1000);
    };

    return (
        <div className={`container ${overlayActive ? 'overlay-active' : ''}`}>
            <div className="overlay" onClick={() => setOverlayActive(false)}></div>
            {data.filter((item) => item.title === title).map((elem, id) => (
                <div key={id} className='block'>
                    <div>
                        <img src={process.env.PUBLIC_URL + elem.image} width="400px" alt="foto" className='blockCartDishImg'/>
                    </div>
                    <div className='titlcont'>
                        <h3>{elem.title}</h3>
                        <h4>{elem.content}</h4>
                    </div>
                    <div className='zakazCart'>
                        <h3>от {(elem.price * sum).toFixed(2)} €</h3>
                    </div>
                    <div className='butCart'>
                        <div className='butNavig'><button className='butCartBackNav' onClick={() => navigate(-1)}>НАЗАД</button></div>
                        <div className='butMinus'>    
                            <button className='butCartBackDel' onClick={decrement}><img src={require("./minus.png")} alt="icon" className="iconCart" /></button>
                        </div>
                         
                            <p className='sumCart'>{sum}</p>
                        <div className='butPlus'>    
                            <button className='butCartBackPl' onClick={increment}><img src={require("./plus.png")} alt="icon" className="iconCartpl" /></button>
                        </div>    
                            <div>
                                <button className='butCartBack' onClick={() => handleAddToOrder(elem)}>
                                    {loading ? <LoaderPage /> : 'Добавить'}
                                </button>
                            </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CartDish;
