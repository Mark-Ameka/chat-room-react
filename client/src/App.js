import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Protected from './components/Protected'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<Protected />}>
          <Route path="/home" element={<Home />} />
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
