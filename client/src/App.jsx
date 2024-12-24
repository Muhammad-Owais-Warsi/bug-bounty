import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from "./components/login";
import Home from "./components/home";
import GetAssignedBounties from "./components/assigned";


export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={ <Home /> } />
          <Route path="/assigned" element={<GetAssignedBounties/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
} 