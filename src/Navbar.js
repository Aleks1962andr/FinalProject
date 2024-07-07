import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const Navbar = ({ handleCategoryChange, handleCartClick, order }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav>
     
      <img src="/image/logos.jpg" alt="Logo" className="logo" />
      <Link to="/" className='link' onClick={() => handleCategoryChange('')}>Меню</Link>
      <Link to="/" className='link' onClick={() => handleCategoryChange('Пицца')}>Пицца</Link>
      <Link to="/" className='link' onClick={() => handleCategoryChange('Закуски')}>Закуски</Link>
      <Link to="/" className='link' onClick={() => handleCategoryChange('Салаты')}>Салаты</Link>
      <Link to="/" className='link' onClick={() => handleCategoryChange('Супы')}>Супы</Link>
      <Link to="/" className='link' onClick={() => handleCategoryChange('Паста')}>Паста</Link>
      <Link to="/" className='link' onClick={() => handleCategoryChange('Десерты')}>Десерты</Link>
      <Link to="/action" className='link'>Акции</Link>
      <Link to="/delivery" className='link'>Доставка</Link>
      <Link to="/search" className='link'><img src="/image/5613.jpg" alt="icon" className="icon" /></Link>
      <Link to="/sorting" className='link'><img src="/image/strela.jpg" alt="icon" className="icon" /></Link>
      
      <div
        className='link'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link to="/order" className='linkBacket' onClick={handleCartClick}>Корзина</Link>
        {isHovered && order.length === 0 && (
          <div className='empty-cart-popup'>
            <div><img src="/image/box.jpg" alt="box" className="box" /></div>
            <div> Корзина пуста, сделайте Ваш заказ</div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
