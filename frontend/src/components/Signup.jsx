import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Signup = () => {


const [username,setusername]=useState()
const [firstname,setfirstname]=useState()
const [lastname,setlastname]=useState()
const [password,setpassword]=useState()
const navigate=useNavigate()
const [error,seterror]=useState()


    return (
        <div className="text-center">
          <form onSubmit={(e)=>{e.preventDefault()}}
          className=" mt-4 mr-52 ">
            <div className="m-4">
    <h1 className="text-4xl font-bold text-blue-500">SignUp</h1>
    <p className="text-sm mb-2 font-bold text-gray-700 mt-1">Enter your details to signUP</p>
    </div>
    <div className="flex flex-col ">
        <p 
        className="text-gray-400 text-lg mr-72">
            Email</p>
    <input onChange={(e)=>{setusername(e.target.value)}}
    className=" m-3 w-80 py-2 px-2 rounded-md"
    type="text" placeholder="john@gmail.com"
    />
    <p className="text-gray-400 text-lg mr-72">FirstName</p>
    <input onChange={(e)=>{setfirstname(e.target.value)}}
    className=" m-3 w-80 py-2 px-2 rounded-md"
    type="text" placeholder="john@gmail.com"
    />
    <p className="text-gray-400 text-lg mr-72">LastName</p>
    <input onChange={(e)=>{setlastname(e.target.value)}}
    className=" m-3 w-80 py-2 px-2 rounded-md"
    type="text" placeholder="john@gmail.com"
    />
        <p className="text-gray-400 text-lg mr-64">Password</p>
    
    <input onChange={(e)=>{setpassword(e.target.value)}}
    className="m-3 w-80  py-2 px-2 rounded-md"
     type="password"placeholder="password" 
     />
    <button onClick={async()=>{
        const resp=await axios.post("http://localhost:3000/api/v1/user/signup",
            {username,password,firstname,lastname}
        )
        console.log(resp)
        if(resp.data.token)
        {   localStorage.setItem("token",resp.data.token)

           navigate("/dashboard") 
        }
        else seterror(resp.data.message)


    }}
    className="text-white m-3 w-80  py-2 px-2 hover:opacity-65 rounded-md bg-blue-900">
        Sign Up
        </button>
    </div>
    </form>
         {error && <p className="text-white">{error}</p>}
        </div>
      )
    }
    


export default Signup
