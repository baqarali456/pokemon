import React from 'react'
import { useSelector } from 'react-redux'
import PokemonCard from './PokemonCard'

function FilterList() {
    const filterpokemons = useSelector(state=>state.filterpokemons)
  return (
    <>
    <h1 className='text-center mt-4'>Filter Pokemons</h1>
    <div className=' d-flex mt-4 sm:flex-row flex-col justify-content-center align-items-center container flex-wrap gap-4'>
    {
        filterpokemons.length?filterpokemons.map(pokemon=>(
            <PokemonCard key={pokemon.id} {...pokemon}/>
        )):<h1 className=' text-center mt-4'>No any Type of Pokemon in Pokemons List</h1>
    }
</div>

    </>
  )
}

export default FilterList