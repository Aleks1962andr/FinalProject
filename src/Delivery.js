import './delivery.css';

function Dilevery() {
    return (
      
      <div className="sumList"> 
         <div className="contact">
            <div className="name">
               <p>HAPPY PIZZA</p>
            </div>
            <div className="adress">
               <p>28 October Ave 327, Limassol 3106</p>
               <p>(+357) 77000757</p>
            </div>
            <div className="restaurant">
               <p>RESTAURANT HOURS</p>
            </div>
            <div className="days">
               <p>Monday          <span>10:30 am - 10:00 pm</span></p>
               <p>Tuesday         <span>10:30 am - 10:00 pm</span></p>
               <p>Wednesday       <span>10:30 am - 10:00 pm</span></p>
               <p>Thursday        <span>10:30 am - 10:00 pm</span></p>
               <p>Friday          <span>10:30 am - 10:00 pm</span></p>
               <p>Saturday        <span>10:30 am - 10:00 pm</span></p>
               <p>Sunday          <span>10:30 am - 08:00 pm</span></p>
            </div>
       <div className="contentP">
             <h3>СПОСОБЫ ОПЛАТЫ:</h3>
               <p>1. Наличный расчёт и безналичный расчет</p>
<p>Если товар доставляется курьером, то оплата осуществляется наличными курьеру в руки или банковской картой с помощью мобильных банковских терминалов. При получении товара обязательно проверьте комплектацию товара и наличие чека.</p>
<p>2.Банковской картой</p>
<p>Оплатить заказ можно с помощью банковских карт платёжных систем Visa, MasterCard. </p>
            </div>
         </div>
             <div className='location'>
             <iframe className='map' frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=Limassol+28+October+Ave+327&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
             </div>
 
       </div>
    );
  }
export default Dilevery;