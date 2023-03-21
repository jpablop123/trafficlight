import { useEffect, useState } from "react";
import React from "react";

const Traficlight = () => {
 const [isRed, setRed] = useState(false);
 const [isYellow, setYellow] = useState(false);
 const [isGreen, setGreen] = useState(false);

  return (
    <>
      <div className="contenido" align="center">
        <div id="trafficLight" align="center">
          <div className="container">
            <div className="red-light" id="Red">
              <button onClick={()=>{
				setRed(true);
				setYellow(false);
				setGreen(false);
			  }}

			   className={`${isRed === true ? "boton1":""} rounded-circle`} 
			   ></button>
            </div>
            <div className="yellow-light" id="Yellow">
			<button onClick={()=>{
				setRed(false);
				setYellow(true);
				setGreen(false);
			  }}

			   className={`${isYellow === true ? "boton2":""} rounded-circle`} 
			   ></button>
            </div>
            <div className="green-light" id="Green">
			<button onClick={()=>{
				setRed(false);
				setYellow(false);
				setGreen(true);
			  }}

			   className={`${isGreen === true ? "boton3":""} rounded-circle`} 
			   ></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Traficlight;
