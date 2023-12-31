import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import AllCourses from "./pages/AllCourses"
import Results from "./pages/Results"
import Gallery from "./pages/Gallery"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"
import SingleCourse from "./components/SingleCourse"


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/edubjuti" element={<Home />} />
        <Route path="/courses" element={<AllCourses />} />
        <Route path="/results" element={<Results />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses/:id" element={<SingleCourse />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
