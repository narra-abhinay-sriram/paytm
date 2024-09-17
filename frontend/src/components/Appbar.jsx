
const Appbar = () => {
  return (
    <div className="flex justify-between  w-full bg-blue-800 p-5 bg-gradient-to-r from-black">
      <div className="w-3/6">
        <p className="text-blue-500 font-bold text-2xl">PayNOW</p>
      </div>
      <div className="flex justify-end w-3/6">
        
        <button className="text-blue-700 font-semibold bg-white p-2 rounded-lg mr-4">Update Details</button>
        <button className="text-blue-700 font-semibold bg-white p-1 rounded-lg ">Logout</button>
      </div>
      
    </div>
  )
}

export default Appbar
