import React from 'react';
import Item from './item.js'
import './liste.css'


const Liste=({news,remove})=>{
    
    return(<div className='liste'>
        {news.map((el,index)=>
            {return<Item key={index}  item={el} id={index} remove={remove}  />})}
    </div>)
}

export default Liste;