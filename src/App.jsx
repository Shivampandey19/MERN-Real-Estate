import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import Profile from "./pages/Profile"
import About from "./pages/About"
import SignUp from "./pages/SignUp"
import Header from "./Components/Header"

export default function App() {
  return (

    <BrowserRouter>
    <Header />
    <Routes>
    <Route path="/" element= {<Home />}/>
    <Route path="/Sign-in" element= {<SignIn />}/>
    <Route path="/Sign-up" element= {<SignUp />}/>
    <Route path="/Profile" element= {<Profile />}/>
    <Route path="/About" element= {<About />}/>

    </Routes> 
    </BrowserRouter>
  )
}
 