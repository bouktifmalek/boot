import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Courses from "./components/Courses/Courses";
import Quiz from "./components/Quiz/Quiz";
import Contact from "./components/Contact/Contact";
import Register from "./components/Register/Register";
import Login from "./components/Connexion/Login";


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<About />} />
        <Route path="/" element={<Courses />} />
        <Route path="/" element={<Quiz/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/Connexion" element={<Login />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
