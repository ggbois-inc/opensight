import { useState } from 'react'
import './App.css'
// import Canvas from "./draw"
// import 'bootstrap/dist/css/bootstrap.min.css';

// import DrawingTool from './components/drawingtool';
import PencilTool from './components/penciltool';
// var quickDraw = require('quickdraw.js');
// quickDraw.set(size, categories)
function App() {
  const [point, setPoint] = useState([]);
  
  
  // setToolType("pencil")
  return (
    <div className='App'>
      {/* <DrawingTool /> */}
      <PencilTool />
    </div>
  );
}

export default App;