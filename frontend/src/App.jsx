import Signin from "./components/Signin"
import Signup from "./components/Signup"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import {BrowserRouter,Routes,Route} from "react-router-dom"


function App() {

  return (
   <BrowserRouter>
   <Routes>
    <Route path="/"element={<Login/>} />
    <Route path="/signup"element={<Signup/>} />
    <Route path="/signin" element={<Signin/>} />
    <Route path="/dashboard"element={<Dashboard/>} />
   </Routes>
   </BrowserRouter>
  )
}

export default App
