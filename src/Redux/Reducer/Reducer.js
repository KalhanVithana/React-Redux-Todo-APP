import { Error_data, Load_data, Load_updateData, load_UserData, Load_Userdata, Sucess_data, Sucess_user, Update_Load, Update_load, Update_Sucess, Update_sucess } from "../Constant/Constant";

export const GetRegisterData = (state = {items:[]},action) =>{


    switch(action.type){

        case Load_data:
            return {loading:true}

        case Sucess_data:
            return{
                loading:false,
                items:action.payload
            }

            case Error_data:
                return{
                    loading:false,

                }


                default:
                    return state;
    }
}



export const UserData = (state= {user:[]},action)=>{


        switch (action.type) {
            case load_UserData:
                return {
                    loading:true
                }

                case Sucess_user:
                return {
                    loading:false,
                    user:action.payload
                }
                
        
            default:
                return state;
        }


}


export const  UpdateUserData = (state= {},action)=>{

    switch (action.type) {
        case Update_Load:
            return {
                loading:true
            }

            case Update_Sucess:
            return {

                User:action.payload
            }
        
    
        default:
            return state;
    }


}