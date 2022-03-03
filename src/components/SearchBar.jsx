import React, { useState } from "react";

export default function SearchBar({ onSearch }) {

  const [city, setCity] = useState('')
  return (
    <form className="form-inline"
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
      }}>
      <input className="form-control mr-sm-2" onChange={(e)=> setCity(e.target.value)} type='text' placeholder='Ciudad...' />
      <input type='submit' className='btn btn-outline-success my-2 my-sm-0' value='Agregar' />
    </form>
  );
}