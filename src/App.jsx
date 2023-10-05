import "./App.css"
import Footer from "./Components/Footer"
import Navbar from './Components/Navbar'
import AllRoutes from "./ContextProvider/AllRoutes"

function App() {
  const data = JSON.parse(localStorage.getItem("userDetails"))
  if (!data) {
    localStorage.setItem("userDetails", JSON.stringify({}))
    console.log(JSON.parse(localStorage.getItem("userDetails")))
  }
  return (
    <div>
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  )
}

export default App
