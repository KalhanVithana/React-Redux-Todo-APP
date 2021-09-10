import axios from "axios"
import { Error_data, Load_data, load_UserData, Sucess_data, Sucess_user, Update_Load, Update_Sucess } from "../Constant/Constant"



export const LoadItems =()=>async(dispatch)=>{

 try{
    dispatch({type:Load_data})


   
    const data = await axios.get('http://localhost:4000/user/get');


    dispatch({type:Sucess_data,payload:data.data})
 }
 catch(e){

    dispatch({type:Error_data})

    console.log(e)
 }



}

export const LoadUserData = (id)=>async(dispatch)=>{

      try{
         dispatch({type:load_UserData})


      const data = await axios.get('http://localhost:4000/user/edit/'+id);



      dispatch({type:Sucess_user,payload:data.data})

      }
      catch(e){

     
         console.log(e)
      }



}




export const Updatedetails = (id,name,email,password)=>async(dispatch)=>{

   try{
      dispatch({type:Update_Load})

      const formdata = {
         name,email,password
     }
   const data = await axios.put('http://localhost:4000/user/update/'+id,formdata);


   dispatch({type:Update_Sucess,payload:data})
   }
   catch(err){

     
      console.log(e)
   }

}



