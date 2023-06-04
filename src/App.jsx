import { useState, useEffect } from 'react'
import './App.css';
import PencilTool from './components/penciltool';
// import quickdraw from "quickdraw.js";
import axios from 'axios'
// import 'quickdraw-component/quickdraw-component.js';

function App() {

  // const [pointArray, setpointArray] = useState([]);
  const [point, setPoint] = useState([]);
  const [shape, setshape] = useState([[]]);


  function cosinesim(A, B) {
    var dotproduct = 0;
    var mA = 0;
    var mB = 0;

    for(var i = 0; i < A.length; i++) {
        dotproduct += A[i] * B[i];
        mA += A[i] * A[i];
        mB += B[i] * B[i];
    }

    mA = Math.sqrt(mA);
    mB = Math.sqrt(mB);
    var similarity = dotproduct / (mA * mB);

    return similarity;
}
  // var quickDraw = require('quickdraw.js');
  useEffect(() => {
    // axios.get('https://storage.googleapis.com/quickdraw_dataset/full/simplified/The%20Eiffel%20Tower.ndjson').then((response) => {
    //   console.log(response)
    // });
    let arr = []
  for(let i=0;i<shape.length;i++){

    arr.push(shape[i] - shape[0])
  }
  
  
  
  }, [])

let position;
useEffect(()=> {
  if(point.lenght >1){
    a = point[point.lenght -1][i] - point[0][i]
    b = shape[position]-shape[0])
  
  
  }
  
  
},[point])
  
  // for(let l=)
  


  // shape = quickDraw.set(1,"car")
  // console.log(shape) 


  // setToolType("pencil")
  return (
    <div className='App'>
      {/* <DrawingTool /> */}
      <PencilTool pointArray={point} setPointArray={setPoint} />
    </div>
  );
}

export default App;



// import Canvas from "./draw"
// import 'bootstrap/dist/css/bootstrap.min.css';

// import DrawingTool from './components/drawingtool';