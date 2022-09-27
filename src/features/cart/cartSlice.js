import { createSlice } from "@reduxjs/toolkit";

const initialState={
    totalCart:[]
}

export const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addCart:(state,action)=>{
         state.totalCart.push(action.payload)
        //  console.log('cart', state)
        },
        incrementCount:(state,action)=>{
            state.totalCart.map((ele)=>{
            if(ele.name===action.payload.name){
                  const result={
                    numbers:ele.numbers+=1,
                    cartValue:ele.cartValue= action.payload.price * ele.numbers
                  }  
                return {...ele,...result }
            }else{
                return{...ele}
            }
            })
        },
        decrementCount:(state,action)=>{
            console.log(action.payload.numbers)
            if(action.payload.numbers>1){
            state.totalCart.map((val)=>{
                if(val.name===action.payload.name){
                    
                    const result={
                        numbers:val.numbers -=1,
                        cartValue:val.cartValue= action.payload.price * val.numbers
                    }
                    console.log('result',result)
                    return {...val,...result}
                }else{
                    return{...val}
                }
            })
        }
    }
    }
})

export  const selectCart=(state)=>state.cart.totalCart

export const {addCart ,incrementCount,decrementCount} =cartSlice.actions

export default cartSlice.reducer