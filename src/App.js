import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";

const App = () => (
  <Router>
    <Navbar />
    <Header />
  </Router>
);

export default App;
