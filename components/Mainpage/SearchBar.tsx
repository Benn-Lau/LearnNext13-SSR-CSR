"use client"
import React from 'react'
import SearchManufactuere from './SearchManufactuere'
import { useState } from 'react'
export default function SearchBar() {
  const [manufacturer, setmanufacturer] = useState('')
  const handleSearch = () => {}
  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className='searchbar__item'>
        <SearchManufactuere manufacturer={"s"} />
      </div> 
    </form>
  )
}
