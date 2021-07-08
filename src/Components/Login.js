import React,{useState} from 'react'
import "./Login.css"
import {Link,useHistory } from "react-router-dom"
import { auth } from './Firebase';
function Login() {
    const history=useHistory()
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("")
    const login=(e)=>{
        e.preventDefault()
        //login logic here 
        auth.signInWithEmailAndPassword(email,pass)
        .then((auth)=>{
            //redirect to home page
            history.push("/")
        })
        .catch((e)=>{
            alert(e.message);
        })
    }
    const register=(e)=>{
        e.preventDefault()
        //create user here 
        auth.createUserWithEmailAndPassword(email,pass)
        .then((auth)=>{
            //creating a user nd logged in nd redirect to homepage
            history.push("/")
        })
        .catch(e=>alert(e.message))
    }
    return (
        <div className="login">
           <Link to="/">
               <img className="login_logo"
               src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" alt="" />
           </Link>
           <div className="login_container">
               <h1>Sign In</h1>
               <form>
                   <h5>E-mail</h5>
                   <input type="email" value={email} onChange={e=>setEmail(e.target.value)}/>
                   <h5>Password</h5>
                   <input type="password" value={pass} onChange={e=>setPass(e.target.value)} />
                   <button type="submit" className="loginSign" onClick={login}>Sign In</button>
               </form>
               <p>By signing in you agree to Amazon's condition of use and sale . Please see our Privacy notice .</p>
               <button className="registerB" onClick={register}>Creat Your Amazon Account</button>
           </div>
        </div>
    )
}

export default Login
