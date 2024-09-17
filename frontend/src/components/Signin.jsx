
const Signin = () => {
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
<input className=" m-3 w-80 py-2 px-2 rounded-md"
type="text" placeholder="john@gmail.com"/>
    <p className="text-gray-400 text-lg mr-64">Password</p>

<input className="m-3 w-80  py-2 px-2 rounded-md"
 type="password"placeholder="password" />
<button className="text-white m-3 w-80  py-2 px-2 rounded-md bg-blue-900">Sign In</button>
</div>
      </form>
    </div>
  )
}

export default Signin
