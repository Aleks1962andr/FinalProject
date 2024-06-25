import { useContext } from 'react';
import { OrderContext } from './OrderContext';
import './Order.css';
import { useNavigate } from 'react-router-dom';

function Order() {
    const { order, removeFromOrder, updateOrder } = useContext(OrderContext);
    const navigate = useNavigate();

    const increment = (id) => {
        updateOrder(id, prevQuantity => prevQuantity + 1);
    };

    const decrement = (id) => {
        updateOrder(id, prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : prevQuantity));
    };

    return (
        <div className='order-list'>
            {order.map((elem) => (
                <div key={elem.id} className='blockoder'>
                    <div>
                        <img src={process.env.PUBLIC_URL + elem.image} width="100px" alt="foto" className='blockoderImg' />
                    </div>
                    <div className='titlOrder'>
                        <h3>{elem.title}</h3>
                    </div>
                    <div className='zakazOrder'>
                        <h3>{(elem.price * elem.quantity).toFixed(2)} €</h3>
                    </div>
                    <div className='butOrder'>
                        <button onClick={() => decrement(elem.id)}><img src={require("./minus.png")} alt="icon" className="butMinusOrd" /></button>
                        <p className='sumOrder'>{elem.quantity}</p>
                        <button onClick={() => increment(elem.id)}><img src={require("./plus.png")} alt="icon" className="butPlusOrd" /></button>
                    </div>
                    <div className='butDelOde'>
                        <button onClick={() => removeFromOrder(elem.id)}>
                            <img src={require("./delete.jpg")} alt="icon" className="butDelOrd" />
                        </button>
                    </div>
                </div>
            ))}
            {order.length > 0 && (
                <div>
                    <div className='sumOrder'> 
                        <h3>Сумма блюд по заказу: {(order.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)).toFixed(2)} €</h3>
                    </div>
                    <div className='orderBlockBut'>
                        <button className='oderBackNav' onClick={() => navigate('/')}>Вернуться в меню</button>
                        <button className='orderForm'>Оформить заказ</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Order;
