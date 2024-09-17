import axios from "axios"
import Appbar from "../components/Appbar"
import { useState } from "react"
import Users from "../components/Users"
const Dashboard = () => {
  const [balance,setbalance]=useState()
  const [showbalance,setshowbalance]=useState(false)
  return (
    <div className="bg-blue-900 w-screen h-100vh min-h-screen bg-gradient-to-r from-black">
      <div>
      <Appbar/>
      <hr className="h-1 bg-white border-0" />
      </div>
      <div>
        <button onClick={async()=>{
const resp=
await axios.get("http://localhost:3000/api/v1/transaction/balance",
  {headers:
    {Authorization:"Bearer "+localStorage.getItem("token")

    }})
    setbalance(resp.data.balance)
    setshowbalance(!showbalance)
        }}
        className="text-blue-800 m-4 bg-white rounded-lg font-bold p-2 text-3xl flex hover:bg-opacity-65">wallet
          <img className="w-9  h-6 m-2"
          src="https://thumbs.dreamstime.com/b/crypto-wallet-vector-decentralized-cryptocurrency-thin-line-icon-symbol-concept-319055241.jpg" />
        </button>
       {showbalance && <p className="text-gray-400 ml-2 p-1 font-bold text-xl">Balance : {balance} Rs</p>}
        </div>
        <div>
          <Users/>
        </div>
      </div>
  )
}

export default Dashboard
