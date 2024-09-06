import React from 'react';
import { useLocation } from 'react-router-dom';

function Greeting() {
  const location = useLocation();
  const { state } = location;
  const to = state?.to || '';
  const from = state?.from || '';

  return (
    <div>
      <div style={{ width: '750px', height: '400px', backgroundColor: 'lightpink', border: '1px solid gray', position: 'absolute', top: '130px', right: '500px', borderRadius: '10px' }}>
        <h1 style={{ color: 'black', textAlign: 'center', paddingTop: '20px' }}>
        Happy Teacher's Day
        </h1>


        <img src ='smile2.png' width ='130px' height = '90px' style = {{position:'absolute', right: '15px', top: '10px'}}/>
        

        <br/> <br/> 
        <p style={{  width: '400px', fontFamily: 'sans-serif',textAlign: 'center', color: 'white', backgroundColor: 'purple', marginLeft: '-1px', fontSize: '29px', fontWeight: 'bold' }}>
          To : {to}
        </p>

        <p style = {{marginTop: '20px', padding: '10px', fontSize: '27px', fontFamily: 'sans-serif'}}> "To a remarkable teacher: Happy Teacher's Day! Your passion and support, shaped many lives. Thank you for everything. May your future be filled with continued success, joy, and the satisfaction of seeing your students thrive." </p> <br/> <br/>
      




   
        

        <img src = 'greet2.webp' width= '400px' height = '200px' style = {{position: 'absolute', top: '-50px', left: '-130px'}}/>


      <img src = 'greet.png' width = '300px'height = '120px' style = {{position: 'absolute', top: '300px', marginLeft: '-40px'}}/>
      <br/> <br/>
        <p style={{ color: 'white', textAlign: 'center', fontFamily: 'sans-serif', 'marginTop': '-10px',borderRadius: '3px', backgroundColor: 'purple', 'marginLeft': '300px', 'fontSize': '29px', fontWeight: 'bold' }}>
           From : {from}
        </p>
      </div>
    </div>
  );
}

export default Greeting;
