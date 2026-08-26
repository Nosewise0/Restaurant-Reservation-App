import { Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Navbar from "./pages/navbar"
import About from "./pages/about"
import Products from "./pages/products"
import Footer from "./pages/footer"
import Contact from "./pages/contact"
import DeliveryMenu from "./pages/menus/delivery"
import DiningMenu from "./pages/menus/dining"
import DrinkMenu from "./pages/menus/drinks"
import DessertMenu from "./pages/menus/desserts"


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Products />
            </>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menus/delivery" element={<DeliveryMenu />} />
        <Route path="/menus/dining" element={<DiningMenu />} />
        <Route path="/menus/drinks" element={<DrinkMenu />} />
        <Route path="/menus/desserts" element={<DessertMenu />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App