import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Signin = () => {
    const [username,setusername]=useState()
    const [password,setpassword]=useState()
    const [error,seterror]=useState()
    const navigate=useNavigate()
  return (
<div className="text-center">
 <form onSubmit={(e)=>e.preventDefault()}
      className=" mt-32 mr-52 ">
        <div className="m-4">
    <h1 className="text-4xl font-bold text-blue-500">SignIn</h1>
<p className="text-sm mb-2 font-bold text-gray-700 mt-1">Enter your details to signIn</p>
</div>
<div className="flex flex-col ">
    <p className="text-gray-400 text-lg mr-72">Email</p>
<input onChange={(e)=>{setusername(e.target.value)}}
className=" m-3 w-80 py-2 px-2 rounded-md"
type="text" placeholder="john@gmail.com"
/>
<p className="text-gray-400 text-lg mr-64">Password</p>

<input onChange={(e)=>{setpassword(e.target.value)}}
className="m-3 w-80  py-2 px-2 rounded-md"
 type="password"placeholder="password" 
 />
<button onClick={async()=>{

    const resp=await axios.post("http://localhost:3000/api/v1/user/signin",
        {username,password})
     if(resp.data.token){
        localStorage.setItem("token",resp.data.token)
        navigate("/dashboard")

     }else seterror(resp.data.message)
}}
className="text-white m-3 w-80 hover:bg-opacity-65 py-2 px-2 rounded-md bg-blue-900">
    Sign In
    </button>
</div>
{error && <p className="text-white">{error}</p>}

      </form>
    </div>
  )
}

export default Signin
