import React from 'react';
import './App.css';

function App() {
  return (
    <div className="flex flex-row items-center h-screen space-x-4 bg-red-100 p-20">
      <div className="w-1/3">
        <img className="h-44 ml-auto object-scale-down hide-img-background" src="https://emojiguide.org/images/emoji/1/16ohnvc1hxuwo1.png" alt="cochon"></img>
      </div>

      <div className="w-1/3 relative">
        <img className="kiss h-24 object-scale-down hide-img-background" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNW29hHTB3MxINmfTcCYENj_NPT3Y_3KrILA&usqp=CAU" alt="kiss"></img>
      </div>

      <div className="w-1/3">
        <img className="h-44 mr-auto object-scale-down hide-img-background" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8YoTzylIk926jNaY9cs6va9t6BMLs1w4pg&usqp=CAU" alt="poulette"></img>
      </div>
    </div>
  );
}

export default App;
