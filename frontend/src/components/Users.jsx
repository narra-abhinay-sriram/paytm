import axios from "axios"
import { useEffect, useState } from "react"
import Userbox from "./Userbox"

const Users = () => {
    const [search,setsearch]=useState("")
    const [user,setuser]=useState()

useEffect(()=>{
    fetchdata()
},[search])
const fetchdata=async()=>{
    const resp=await axios.get("http://localhost:3000/api/v1/user/bulk?filter="+search,
        {headers:{Authorization:"Bearer "+localStorage.getItem("token")}})
        console.log(resp.data.users)
        setuser(resp.data.users)

}

  return (
    <>
    <div>
        <div>
      <p className="text-white font-bold mt-8 text-2xl">Users: ({user && user.length})</p>
      </div>
      <div>
<input onChange={(e)=>{
    setsearch(e.target.value)
}}
className="w-1/2 mt-2 p-2 rounded-md"
type="text" 
placeholder="search user here"
/>
      </div>
    </div>
    <div>
       {user&& user.map((user)=>(<Userbox key={user._id} User={user}/>))}
    </div>
    </>
  )
}

export default Users
