import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Protected from './components/Protected'
import { ChatProvider } from "./contexts/ChatContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ChatProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<Protected />}>
              <Route path="/home" element={<Home />} />
            </Route>
          </Routes>
        </ChatProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
