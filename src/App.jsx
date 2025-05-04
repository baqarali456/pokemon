
import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import PokemonList from './components/PokemonList'
import axios from "axios"
import { useDispatch } from 'react-redux'
import { handlePokemons, handleShowFilter } from './store/pokemonSlice'
import { useSelector } from 'react-redux'
import FilterList from './components/FilterList'

function App() {


  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch()
  const showList = useSelector(state => state.showlist)

  useEffect(() => {
    ; (async () => {
      try {
        setError(false)
        setLoading(true)
        dispatch(handleShowFilter(false))
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=150`)
        let pokemons = [];
        for (let index = 0; index < response.data.results.length; index++) {
          let getpokemon = await axios.get(response.data.results[index].url)
          let Types = []
          for (const key in getpokemon.data) {
            if (key === "types") {
              for (const typekey in getpokemon.data[key]) {
                Types.push(getpokemon.data[key][typekey].type.name)
              }
            }
            else {
              continue;
            }
          }
          pokemons.push({ ...getpokemon.data, Types })

        }
        dispatch(handlePokemons({ value: pokemons }))
        setLoading(false)

      } catch (error) {
        setLoading(false)
        setError(error?.message)
      }
    })()
  }, [])


  return (
    <>
      <Navbar />
      {
        loading ? <h1 className='text-center mt-5'>Loading ...</h1> : (error ? <h1 className=' text-center mt-5'>{error}</h1> : (showList ? <PokemonList /> : <FilterList />))
      }
    </>
  )
}

export default App
