import React, { useState,useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from 'axios'
import {useDispatch,useSelector} from 'react-redux'
import { GetUsers, Register } from '../Action/Action.type';
import { LoadItems } from '../Redux/action/Action';
 export default function RegisterUser() {

    const [name,setname] =useState();
    const [email,setemail] =useState();
    const [password,setpassword] =useState();
    const data = useSelector((state) => state.GetUsers)

    const Items =useSelector((state)=>state.GetRegisterData)

    const {user} =data;

    const {items} =Items;
   
    const [u,setu]=useState([]);




    
   
     
   
console.log(items);

   

const dispatch = useDispatch();
     

    onsubmit= async(e)=>{
        e.preventDefault();

        dispatch(Register(name,email,password));
     
    }

    useEffect(async() => {
      
        dispatch(GetUsers());

        // const data = await axios.get('http://localhost:4000/user/get').then(res=>{

        // console.log(res.data)
        // setu(res.data)
        // })

        dispatch(LoadItems())


       

    }, [dispatch])


    return (
        <div>
            <form onsubmit={onsubmit}>
                <input type ='text' value= {name}  onChange={(e)=>{
                    setname(e.target.value)
                }} placeholder="name"></input>
                <input type='text' value= {email} onChange={e=>{
                    setemail(e.target.value)
                }}></input>
                <input type='text' value= {password} onChange={e=>{
                    setpassword(e.target.value)
                }}></input>
              

              <button type="submit" className="btn btn-success  rounded-pill">Submit</button>
        </form>

         
        {
          
          
         
          items?.map((res,i)=>{
 
             return<table>
             <tr>
               <th>Company</th>
              
             </tr>
             <tr>
               <td>{res.name}</td>
               
             </tr>

             <Link to={`/edit/${res._id}`}>edit</Link>
             
            
           </table>

             
                    
                   
           })
       }
      </div>

       
    )
}
