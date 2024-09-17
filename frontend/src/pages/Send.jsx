import axios from "axios"
import { useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"

const Send = () => {
  const [searchparam]=useSearchParams()
  const receiverid=searchparam.get("id")
  const name=searchparam.get("name")
  const [amount,setamount]=useState(0)
  const navigate=useNavigate()
  const [error,seterror]=useState(false)
  return (
    <div className="bg-blue-900 flex justify-center items-center h-screen w-screen bg-gradient-to-r from-black">
      
      <form onSubmit={(e)=>{e.preventDefault()}} className="p-24 bg-black rounded-md bg-opacity-85">
      <div >
        <h1 className="text-blue-800 text-center font-bold mb-8 text-4xl">Send Money</h1>
        <h2 className="text-gray-300 font-bold text-xl mb-2">Recipient-: {name}</h2>
        <p className="text-md text-gray-400">Amount in (Rs)</p>
        <input onChange={(e)=>{setamount(e.target.value)}}
         type="number"
        className="w-80 py-2 px-2 mt-2 rounded-md"
        placeholder="ex: Rs 100" />
        </div>
        <div>
        <button onClick={async()=>{
          const resp=await axios.post("http://localhost:3000/api/v1/transaction/transfer",
            {to:receiverid,amount:amount},{headers:{Authorization:"Bearer "+localStorage.getItem("token")}})
            if(resp.data.message=="transfer successfull")
            {alert("amount transferred to receipient")
              navigate("/dashboard")
            }else seterror(resp.data.message)
        }}
        className="text-white  font-bold text-lg w-80 mt-5 py-2 px-2 hover:opacity-65 rounded-md  bg-blue-900">Pay</button>
              {error && <p className="text-red-700  w-80 mt-3 py-2 px-2">{error}</p>}

        </div>
      </form>
      
    </div>
  )
}

export default Send
