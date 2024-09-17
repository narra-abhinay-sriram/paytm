import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


const Update = () => {
    const [firstname,setfirstname]=useState()
    const [lastname,setlastname]=useState()
    const [password,setpassword]=useState()
    const [error,seterror]=useState()
    const navigate=useNavigate()
    return (
        <div className="flex justify-center items-center bg-blue-950 h-screen w-screen bg-gradient-to-r from-black">
          <form onSubmit={(e)=>{e.preventDefault()}}
          className=" bg-black p-24 rounded-md  ">
            <div className="">
    <h1 className="text-4xl font-bold text-blue-500 mb-3">Update your details</h1>
    </div>
    <div className="flex flex-col ">
       
    <p className="text-gray-400 text-lg ">FirstName</p>
    <input onChange={(e)=>{setfirstname(e.target.value)}}
    className="  w-80 py-2 px-2 rounded-md"
    type="text" placeholder="John"
    />
    <p className="text-gray-400 text-lg ">LastName</p>
    <input onChange={(e)=>{setlastname(e.target.value)}}
    className="  w-80 py-2 px-2 rounded-md"
    type="text" placeholder="Wick"
    />
        <p className="text-gray-400 text-lg ">Password</p>
    
    <input onChange={(e)=>{setpassword(e.target.value)}}
    className=" w-80  py-2 px-2 rounded-md"
     type="password"placeholder="password" 
     />
    <button onClick={async()=>{
        const resp=await axios.put("http://localhost:3000/api/v1/user/",
            {password,firstname,lastname},{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}
        )
        console.log(resp)
        if(resp.data.message=="updated successfully")
        {   
            alert("updated successfully")
           navigate("/dashboard") 
           
        }
        else seterror(resp.data.message)


    }}
    className="text-white  w-80 mt-3 py-2 px-2 hover:opacity-65 rounded-md bg-blue-900">
        UPDATE
        </button>
        {error && <p className="text-white  w-80 mt-3 py-2 px-2">{error}</p>}

    </div>
    </form>
        </div>
      )
}

export default Update
