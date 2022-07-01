import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import PreNavbar from "./components/navbar/PreNavbar";

const App = () => (
  <Router>
    <PreNavbar />
    <Navbar />
    <Header />
  </Router>
);

export default App;
