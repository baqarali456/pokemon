import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    pokemons:[],
    filterpokemons:[],
    showFilter:false,
    showlist:true,
 
}

const pokemonSlice = createSlice(
    {
        name:'pokemon',
        initialState,
        reducers:{
         handlePokemons:(state,action)=>{
             const {value} = action.payload;
             state.pokemons = value
         },
         handlefilterPokemons:(state,action)=>{
             const {value} = action.payload;
             state.filterpokemons = value
         },
         handleShowFilter:(state,action)=>{
            state.showFilter = action.payload
         },
         handleShowList:(state,action)=>{
            state.showlist = action.payload
         },
        
        }
    }
)

export const pokemonReducer = pokemonSlice.reducer;
export const {handlePokemons,handlefilterPokemons,handleShowFilter,handleShowList} = pokemonSlice.actions;