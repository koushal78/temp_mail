import { useState } from "react";
import "./App.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import { mailData } from "./context/mailContext";

function App() {
  const [count, setCount] = useState(0);
  const { username , password} = mailData(); // ✅ will now work

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
