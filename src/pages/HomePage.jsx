import React from "react"
import Searchbar from '../components/Search'
import Dropdown from'../components/Dropdown'
import CountryCard from '../components/CountryCard'

const Homepage=()=>{
  
    return(
    <div className="">
          <div className='search-and-drop'>
            <Searchbar/>
            <Dropdown/>
          </div>
          <div className='cards'>
            <CountryCard/>
          </div>
    </div>
        )
}
export default Homepage;