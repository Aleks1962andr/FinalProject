import { useState, useContext } from 'react';
import { data } from './Data';
import { Link, useNavigate } from 'react-router-dom';
import { OrderContext } from './OrderContext';
import './Search.css';
import Swal from 'sweetalert2';
import './CustomSwal.css';


function Search() {
    const { addToOrder } = useContext(OrderContext); 
    const navigate = useNavigate();
    const [mySearch, setMySearch] = useState("");
    const [wordSubmitted, setWordSubmitted] = useState('');

    const myRecipeSearch = (e) => {
        setMySearch(e.target.value);
    };

    const finalSearch = (e) => {
        e.preventDefault();
        setWordSubmitted(mySearch);

        const filteredData = data.filter((item) => 
            item.title.toLowerCase().includes(mySearch.toLowerCase())
        );

        if (filteredData.length === 0) {
            alertUse();
        }
    };
    const alertUse = () => {
        Swal.fire({
            title: "Ошибка ввода!!!",
            text: "ВВЕДИТЕ ПРАВИЛЬНО НАИМЕНОВАНИЕ БЛЮДА",
            icon: "question",
            background: '#E0FBE2', 
            customClass: {
                popup: 'custom-popup', 
                title: 'custom-title', 
                content: 'custom-content', 
                confirmButton: 'custom-confirm-button' 
            },
            confirmButtonColor: '06D001', 
        });
    };       
 
 const filteredData = data.filter((item) => item.title.toLowerCase().includes(wordSubmitted.toLowerCase()));
    return (
        <div>
            <div className='containerSearch'>
                <form onSubmit={finalSearch}>
                    <input 
                        placeholder='Введите название блюда' 
                        onChange={myRecipeSearch} 
                        className='search' 
                        value={mySearch} 
                    />
                </form>
            </div>

            <div className='containerSearch'>
                <button onClick={finalSearch}>
                    Поиск
                </button>
            </div>

   
        <div className='product-cards'>  
            {wordSubmitted && filteredData.map((goods, id) => (
                <div className="product-card" key={id}>
                    <Link to={`/cartdish/${goods.title}`}>
                        <img src={process.env.PUBLIC_URL + goods.image} width="300px" alt="foto" />
                    </Link>
                    <div className='title'>
                        <h3>{goods.title}</h3>
                        <h4 className="content">{goods.content}</h4>
                    </div>
                    <div className="zakaz">
                        <h4>от {goods.price} € </h4>
                        <Link to={`/cartdish/${goods.title}`}>             
                        <button>Выбрать</button>
                        </Link>
                    </div>
                </div>
            ))}
            </div>
    
        </div>
    );
}

export default Search;
