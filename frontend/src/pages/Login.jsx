import { useState } from "react"
import Signin from "../components/Signin"
import Signup from "../components/Signup"

const Login = () => {
    const [sign,setsign]=useState(true)
    const handleclick=()=>{
        setsign(!sign)
    }
  return (
    <div className="bg-blue-950 w-screen h-screen bg-gradient-to-r from-black ">
      <div className="flex justify-between ">
        <div className="grid grid-cols-2 mt-32 mr-5 ml-48 w-1/2 grid-flow-col">
            <div className="col-span-1 h-1">
            <h2 className="text-white font-bold text-6xl pt-5">PayNOW</h2>
            </div>
            <div className="ml-5  col-span-1 h-10">
               
            </div>
            <p className="text-white mt-24 mr-5">A fun digital platform where user can signup and get free coins and send to others </p>
        </div>
        <div className="w-1/2   mr-3  bg-black h-[595px] pl-20">
        { sign ? <Signin/> : <Signup/>}
        <p  onClick={handleclick} className="text-white mt-3 cursor-pointer"> {sign ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}</p>

        </div>
      </div>
    </div>
  )
}

export default Login
