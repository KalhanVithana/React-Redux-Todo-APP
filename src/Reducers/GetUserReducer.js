import { get_Load, get_Sucess } from "../constant/UserConstant"


const initalstate = {

    user :[],
   
}
export const  GetUsers = (state= initalstate,action)=>{

    switch(action.type){

        case get_Load:
            return {loading:true}

        case get_Sucess:
            return {loading:true,user:action.payload}


            default:
                return state;
    }


}