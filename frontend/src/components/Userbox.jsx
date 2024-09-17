
const Userbox = ({User}) => {

   
  return (
    <div className="w-full flex justify-between mt-10 overflow-auto">
    <div className="flex justify-start w-2/5 items-center">
      <div className="ml-2">
        <p className="text-white font-bold text-xl bg-blue-800 rounded-full px-4 py-2 ml-5">{User.firstname[0].toUpperCase()}</p>
      </div>
      <div>
        <p className="text-gray-500 p-2 ml-3 text-lg font-bold">{User.firstname} {User.lastname}</p>
      </div>
    </div>
<div className="w-3/5  ">
    <button onClick={()}
    className="text-blue-700 font-bold p-3 rounded-lg hover:bg-opacity-55 ml-[600px] bg-white">Send Money</button>
</div>
    </div>
  )
}

export default Userbox
