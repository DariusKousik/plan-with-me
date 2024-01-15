import './App.css';
import data from './data';
import TOURS from './COMPONENTS/TOURS';
import { useState } from 'react';
function App() {
  const [tours,setTour]=useState(data);
  const handleClick=(id)=>{
    const newTour=tours.filter((tour)=>{
      return tour.id!==id;
    })
    setTour(newTour);
  }
  if (tours.length===0){
    return (
      <div className='page2'>
      <div className='heading2'>No tours left</div>
      <button onClick={()=>{setTour(data)}} className='btn-white'>Refresh</button>
      </div>
    );
  }
  return (
    <div className="body">
      <TOURS tours={tours} fnc={handleClick}></TOURS>
    </div>
  );
}

export default App;
