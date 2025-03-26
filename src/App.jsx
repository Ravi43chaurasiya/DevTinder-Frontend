import { BrowserRouter, Route, Routes } from "react-router-dom"
import Body from "./components/Body"
import Login from "./components/Login"
import Profile from "./components/Profile"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"
import Feed from "./components/Feed"
import Connections from "./components/connections"
import Requests from "./components/Requests"


function App() {
  
  return (
    <>
   <Provider store={appStore}>
   <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Body></Body>}>
        <Route path="/" element={<Feed></Feed>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route path="/connections" element={<Connections></Connections>}></Route>
        <Route path="/requests" element={<Requests></Requests>}></Route>
        </Route>

      </Routes>
    </BrowserRouter>
     
   </Provider>
     
    </>
  )
}

export default App
