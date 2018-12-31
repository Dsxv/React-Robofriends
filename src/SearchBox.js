import React from 'react'
import './SearchBox.css'


const SearchBox = ({setSearch}) => {
  return <div className = "pa2">
    <input type="search" placeholder="Search Nyans" className = "pa3  f4 bg-light-green"
      onChange = {setSearch} />
  </div>;
}
export default SearchBox ;
