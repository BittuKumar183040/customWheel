import './App.css'
import CarSection from './route/carSection/CarSection';
import Landing from './route/landingPage/Landing';
import ReactionTime from "./route/ReactionTime";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<></>}/>
            <Route index element={<Landing/>} />
            <Route path="customs_cars" element={<CarSection/>} />
            <Route path="reaction_time" element={<ReactionTime/>} />
          <Route/>
        </Routes>
      </BrowserRouter>
  )
}

export default App