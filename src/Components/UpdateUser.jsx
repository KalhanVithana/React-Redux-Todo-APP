import React, { useState,useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link,useParams } from "react-router-dom";
import axios from 'axios'
import {useDispatch,useSelector} from 'react-redux'
import { GetUpdate, LoadUserData, LoadUsers, Updatedetails } from '../Redux/action/Action';


export default function UpdateUser() {

    const [name,setname] =useState();
    const [email,setemail] =useState();
    const [password,setpassword] =useState();

    const data = useSelector(state => state.UserData)
    const dispatch =  useDispatch();


   const  {user} = data;
   

    const {id} = useParams();

    console.log(id)

  
    console.log(user)

    


  

    useEffect(async()=>{

    


        const data = await axios.get('http://localhost:4000/user/edit/'+id).then(res=>{

            setname(res.data.name)
            setpassword(res.data.password)
            setemail(res.data.email)
        })


      
        
    },[])




    const submit = (e)=>{

        e.preventDefault();
        
        const formdata ={
            name,email,password
        }

        dispatch(Updatedetails(id,name,email,password))
    }


    


    
    return (
        <div>
            <form onSubmit={submit}>

            <input type ='text' value= {name}  onChange={(e)=>{
                    setname(e.target.value)
                }} placeholder="name"></input>
                <input type='text' value= {email} onChange={e=>{
                    setemail(e.target.value)
                }}></input>
                <input type='text' value= {password} onChange={e=>{
                    setpassword(e.target.value)
                }}></input>

                    <button type="submit">add</button>
            
            </form>

              
            


            
        </div>
    )
}
