import axios from "axios";
import { get_Load, get_Sucess, Register_error, Register_Load, Register_Sucess } from "../constant/UserConstant";

export const Register = (name,email,password) =>async(dispatch)=>{

    dispatch({type:Register_Load})



   
    try{
        const formdata = {
            name,email,password
        }
        const data = await axios.post('http://localhost:4000/user/add',formdata);

        console.log('submited'+data) 
     

        
      
      dispatch({type:Register_Load,payload:data});


    }catch(e){

        dispatch({type:Register_error})

        console.log('err')
      }
}


export const GetUsers =()=>async(dispatch)=>{

    
    dispatch({type:get_Load})

   const data = await axios.get('http://localhost:4000/user/get');

dispatch({type:get_Sucess,payload:data.data});


}