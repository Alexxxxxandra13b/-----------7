import { useState } from 'react';
function Deseti() {
      const [buttonText, setButtonText] = useState('НеВкл'); 
       
      const changeButtonText = () => { 
        if (buttonText === 'НеВкл') { 
          setButtonText('НеВыкл'); 
        } else { 
          setButtonText('НеВкл'); 
        } 
      }; 
     
      return ( 
        <div> 
          <button onClick={changeButtonText}>{buttonText}</button> 
        </div> 
      ); 
    } 
     

export default Deseti;