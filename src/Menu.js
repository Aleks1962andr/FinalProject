import React from 'react';
import { Link } from 'react-router-dom';

function Menu({ choice, sortOption }) {
  const groupedGoods = groupBy(choice, 'name');
  console.log('Menu received choice:', choice);

  const sortedGoods = (goods, sortOption) => {
    if (sortOption === 'desc') {
      return goods.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'asc') {
      return goods.sort((a, b) => a.price - b.price);
    } else {
      return goods; 
    }
  };

  return (
    <div className="products">
      {Object.keys(groupedGoods).map((name) => (
        <div key={name} className="group">
          <div className="name-header">
            <h2>{name}</h2>
          </div>
          <div className="product-cards">
            {sortedGoods(groupedGoods[name], sortOption).map((goods) => {
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

const groupBy = (items, key) => {
  return items.reduce((result, item) => {
    const groupKey = item[key];
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(item);  
       return result;
  }, {});
};

export default Menu;
