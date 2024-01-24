import { createSlice, isAction } from "@reduxjs/toolkit";
import FormValues from "../interfaces/FormValues";
import { storeToLocalstorage } from "../utils/hooks";
interface formSlice{
    data : FormValues[],
    registrationStep:Number
}
const initialState:formSlice={
    registrationStep:1,
    data:[]
}
const formSlice = createSlice({
    name:"formSlice",
    initialState,
    reducers:{
         setRegistrationStep:(state,action)=>{
            return { ...state, registrationStep :action.payload};
         },
         addUser :(state,action)=>{
            storeToLocalstorage(action.payload, "userData")
            return { registrationStep :1, data:[...state.data, action.payload ]};
         },
         fetchUsers :(state, action)=>{
            return {...state, data: action.payload}
         }
    }
})

export const { setRegistrationStep, addUser, fetchUsers } = formSlice.actions;
export default formSlice.reducer;
