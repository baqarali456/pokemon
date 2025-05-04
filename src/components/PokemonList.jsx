import React from 'react'
import { useSelector } from 'react-redux'
import PokemonCard from './PokemonCard'

function PokemonList() {
    const pokemons = useSelector(state=>state.pokemons)
  return (
    <>
    <h1 className='text-center mt-4 gap-4'>All Pokemons</h1>
    <div className=' d-flex mt-4 sm:flex-row flex-col justify-content-center align-items-center container flex-wrap gap-5'>
        {
            pokemons.length ?pokemons.map(pokemon=>(
                <PokemonCard key={pokemon.id} {...pokemon}/>
            )):<h1 className=' text-center mt-4'>No Pokemons in Pokemons List</h1>
        }
    </div>

    </>
  )
}

export default PokemonList