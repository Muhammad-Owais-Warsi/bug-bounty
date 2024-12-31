import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from "./components/login";
import Home from "./components/home";
import GetAssignedBounties from "./components/assigned";
import GetCreatedBounties from "./components/created";
import NotFound from "./components/404";

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={ <Home /> } />
          <Route path="/assigned" element={<GetAssignedBounties/>} />
          <Route path="/created" element={<GetCreatedBounties />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
} 