import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { handlefilterPokemons, handleShowFilter, handleShowList } from '../store/pokemonSlice';


function Navbar() {
  const pokemons = useSelector(state => state.pokemons)

  const dispatch = useDispatch()

  const [name, setName] = useState('')


  const types = ["Fire", "Water", "Grass","Poison","Bug","Flying","Water","Normal","Electric","Ground","Fire","Fairy","Dragon","Psychic","Ice","Rock"]

  const handleSearchPokemonByType = (type) => {
    dispatch(handleShowFilter(true))
    dispatch(handleShowList(false))
    dispatch(handlefilterPokemons({ value: pokemons.filter(pokemon => pokemon.Types.includes(type.toLowerCase())) }))
  }


  useEffect(() => {
    if (name.trim()) {
      dispatch(handleShowList(false))
      dispatch(handleShowFilter(true))
      dispatch(handlefilterPokemons({ value: pokemons.filter(pokemon => pokemon.name.includes(name)) }))
    }
    else {
      dispatch(handleShowList(true))
      dispatch(handleShowFilter(false))

    }
  }, [name])

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Pokemon</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li onClick={() => {
              dispatch(handleShowList(true))
              dispatch(handleShowFilter(false))
            }} className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">All Pokemons</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Types
              </a>
              <ul className="dropdown-menu  overflow-auto" style={{height:"100px",width:"50px"}}>
                {
                  types.map(type => (
                    <li onClick={() => handleSearchPokemonByType(type)} key={type}><a className="dropdown-item" href="#">{type}</a></li>
                  ))
                }
              </ul>
            </li>
          </ul>
          <input onChange={(e) => setName(e.target.value)} value={name} className="sm:w-25 form-control me-2" type="search" placeholder="Search Pokemon" aria-label="Search" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar