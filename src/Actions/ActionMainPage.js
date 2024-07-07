import { useState } from "react";
import { dataaction } from "./DataAction";
import './ActionMainPage.css';
import { Link } from "react-router-dom";
import rightImage from './right.jpg';
import leftImage from './left.jpg';

function ActionMainPage() {
 const[picture, setPicture] =useState(0);
 const{id, titleac, imageac} = dataaction[picture]
 
 const nextPicture = () =>{
    setPicture((picture=>{
        picture++;
      if (picture>dataaction.length - 1) {
        picture = 0;
        }
      return picture;
    }))  
  }

 const previousPicture = () =>{
    setPicture((picture=>{
        picture--;
      if (picture< 0) {
        picture = dataaction.length - 1;
      }
      return picture;
    }))  
  }

    return (
      <div className="blockTwo" >
        <div>
<button onClick={previousPicture} className="butBlock"><img src={rightImage} alt="right" className="imgButton"/></button>
      </div>
 
        <div >
        <Link Link to="/action" >            
  <img src={process.env.PUBLIC_URL + imageac}  alt="image" className="imgPageTwo"/>
  </Link>  
       </div>

        <div>
<button onClick={nextPicture} className="butBlock"><img src={leftImage} alt="left" className="imgButton"/></button>
</div>
      </div>
    );
  }
  
  export default ActionMainPage;