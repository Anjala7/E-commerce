//convert jsx into component rafc enter

import React from 'react'
import { Hero } from '../Components/Hero/Hero'
import { Popular } from '../Components/Popular/Popular'
import { Offers } from '../Components/Offers/Offers'
import { NewCollections } from '../Components/NewCollections/NewCollections'
import { Newsletter } from '../Components/NewsLetter/Newsletter'

export const Shop = () => {
  return (
    <div>
      {/* //now the shop page has hero element */}
      <Hero/>

      {/* mount the popular component */}
      <Popular/>

      {/* mount the offers component */}
      <Offers/>

      {/* mount newcollections */}
      <NewCollections />
      
     {/* mount newsletter */}
      <Newsletter/>
    </div>
  )
}
