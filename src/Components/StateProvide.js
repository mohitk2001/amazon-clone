import React,{createContext,useContext,useReducer} from "react"
//global state
export const StateContext=createContext()

//Build A provider

export const StateProvider=({reducer,initialState,children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
)

//this is how we use state in component
export const useStateValue=()=> useContext(StateContext)