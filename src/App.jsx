import { useState } from 'react'
import './App.css';
import PencilTool from './components/penciltool';
// import quickdraw from "quickdraw.js";
import Axios from 'react'
// import 'quickdraw-component/quickdraw-component.js';

function App() {

  // var quickDraw = require('quickdraw.js');
// axios.get('https://storage.googleapis.com/quickdraw_dataset/full/simplified/The%20Eiffel%20Tower.ndjson').then((responce)=>{
//   data = respone.text.split("}")[0])
//   json.loads(data)
// })
  // shape = quickDraw.set(1,"car")
  // console.log(shape) 
  // const [point, setPoint] = useState([]);
    

// setToolType("pencil")
  return (
    <div className='App'>
      {/* <DrawingTool /> */}
      <PencilTool />
    </div>
  );
}

export default App;



// import Canvas from "./draw"
// import 'bootstrap/dist/css/bootstrap.min.css';

// import DrawingTool from './components/drawingtool';