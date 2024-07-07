import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Menu() {
  const groupedGoods = useSelector((state) => state.filter.groupedDishes);

  
  return (
    <div className="products">
      {Object.keys(groupedGoods).map((name) => (
        <div key={name} className="group">
          <div className="name-header">
            <h2>{name}</h2>
          </div>
          <div className="product-cards">
            {groupedGoods[name].map((goods) => {
              const { id, title, price, content, image } = goods;
              return (
                <div className="product-card" key={id}>
                  <Link to={`/cartdish/${goods.title}`}>
                    <img src={process.env.PUBLIC_URL + image} width="300px" alt="foto" />
                  </Link>
                  <div className='title'>
                    <h3>{title}</h3>
                    <h4 className="content">{content}</h4>
                  </div>
                  <div className="zakaz">
                    <h4>от {price} € </h4>
                    <Link to={`/cartdish/${goods.title}`}>
                      <button>Выбрать</button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Menu;
