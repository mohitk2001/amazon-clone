
export const initialState={
    basket:[],
    user:null
}
export const getBasketTotal=(basket)=>{
    // console.log(parseFloat(basket[0].price.slice(1)))
}
const reducer=(state,action)=>{
    //console.log(action)
    switch(action.type){
        case "SET_USER":
            return {
                ...state,
                user:action.user
            }
            
        case "ADD_TO_BAS":
            //Adding to basket 
            return {...state,
            basket:[...state.basket,action.item]}
        
        case "REMOVE_FROM_BAS":
            //Removing from basket
            let newBasket=[...state.basket];
            //console.log(newBasket)
            const index=state.basket.findIndex((basketItem)=>basketItem.id===action.id)
           // console.log(index)
           if(index>=0){
               //remove item
                newBasket.splice(index,1)
           }
           else{
               console.warn("Cant remove")
           }
            return {...state,basket:newBasket}
        
        default:
            return state
    }
}
export default reducer