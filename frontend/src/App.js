import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TrainingSaver from './Routes/TrainingSaver';
import Starter from './Routes/Starter';



function App() {

  



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TrainingSaver />} />
        <Route path="starter" element={<Starter />} />
        
      </Routes>
    </BrowserRouter>
  );
}



export default App;
