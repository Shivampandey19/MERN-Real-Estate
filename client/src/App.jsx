import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import Profile from "./pages/Profile"
import About from "./pages/About"
import SignUp from "./pages/SignUp"
import Header from "./Components/Header"
import PrivateRoute from "./Components/PrivateRoute"

export default function App() {
  return (

    <BrowserRouter>
    <Header />
    <Routes>
    <Route path="/" element= {<Home />}/>
    <Route path="/signIn" element= {<SignIn />}/>
    <Route path="/signUp" element= {<SignUp />}/>
    <Route path="/About" element= {<About />}/>
    <Route element={<PrivateRoute />}>
    <Route path="/Profile" element= {<Profile />}/>
    </Route>
    </Routes> 
    </BrowserRouter>
  )
}
 