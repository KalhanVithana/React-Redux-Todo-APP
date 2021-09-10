import { get_Load, get_Sucess } from "../constant/UserConstant"

export const  GetALL = (state= {user:[]},action)=>{

    switch(action.type){

        case get_Load:
            return {load:true}

        case get_Sucess:
            return {user : action.playload}
            

            default:
                return state;
    }


}


