
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Send from "./pages/Send"
import Update from "./components/Update"


function App() {

  return (
   <BrowserRouter>
   <Routes>
    <Route path="/"element={<Login/>} />
   
    <Route path="/dashboard"element={<Dashboard/>} />
    <Route path="/send" element={<Send/>} />
    <Route path="/update" element={<Update/>} />
   </Routes>
   </BrowserRouter>
  )
}

export default App
