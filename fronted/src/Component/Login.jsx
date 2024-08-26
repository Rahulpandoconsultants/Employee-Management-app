import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Admin from './Admin';
// import { Navigate } from "react-router-dom";
import { Navigate } from "react-router-dom";



const Login = () => {
    // const navigate=useNavigate();
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [id, setId] = useState();
    const [user, setUser] = useState(false);
    const url = "http://localhost:7000";
  
    const Usernotfound=()=>{
        return(
            <h2 className='text-red-900'>User not Found</h2>
        )
    }


    const handleLogin = async () => {
        const idnotfound=document.querySelector('#notfound');
        idnotfound.style.visibility="hidden";
         

        try {
            const { data } = await axios.get(`${url}/api/show/emp/${id}`);
            if (data.pwd === password && data.mail===mail) {
                setUser(true);
                console.log(data);
                
                // navigate('/admin')
                // <Navigate to="admin"/>
                }else{
                    
                idnotfound.style.visibility="visible";
                    console.log("User not found");
                    
                }

        } catch (error) {
            console.log(error);
           
        }
    }
    return (
        <div className=''  >
          <div className='border-4 w-[70%] m-[auto] h-[70vh] grid place-content-center'>
          <h1 className='text-3xl m-4'>Please Login as an admin</h1>
            <div className='block  '>
                <div className='m-2'>
                    <label for='id'>Your setUserId:-</label>
                    <input type='text' className='border-b-4 w-[50vw] outline-none' placeholder='userid' value={id} onChange={(e) => { setId(e.target.value) }} ></input>
                </div>
                <div className='m-2'>
                    <label for='e-mail'>Your email :- </label>
                    <input type='email' className='border-b-4 w-[50vw] outline-none' placeholder='@gmail.com' value={mail} onChange={(e) => { setMail(e.target.value) }} ></input>
                </div>
                <div  className='m-2'>
                    <label for='password'>Your password:-</label>
                    <input type='text' className='border-b-4 w-[50vw] outline-none' placeholder='' value={password} onChange={(e) => { setPassword(e.target.value) }} ></input>
                </div>
                <div className='my-4' ><button className='border-2 w-20 bg-[#89CFF0] hover:bg-sky-700 ' id='input' onClick={handleLogin}>Login </button></div>
          </div>
                {/* {   
                  user?  <Navigate to="admin" />:null
                } */}
                {
                    user ? <Navigate to="admin" /> :  <h1 className='invisible text-red-900' id='notfound'>User not Found</h1>
                }
            </div>
        </div>
    );
}

export default Login;
