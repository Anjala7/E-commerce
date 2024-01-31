import React from 'react'

import './Popular.css'
//importing data_product from data.js pf assets
import data_product from '../Assets/data'
import { Item } from '../Item/Item'
export const Popular = () => {
  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {/* render item component */}
        {data_product.map((item, i)=>{ 
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}
