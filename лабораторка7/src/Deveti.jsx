import { useState } from 'react';
function Deveti() {
      const [buttonText, setButtonText] = useState('НеСтарт'); 
       
      const changeButtonText = () => { 
        if (buttonText === 'НеСтарт') { 
          setButtonText('НеСтоп'); 
        } else if (buttonText === 'НеСтоп') { 
          setButtonText('НеПерезапуск'); 
        } else { 
          setButtonText('НеСтарт'); 
        } 
      }; 
     
      return ( 
        <div> 
          <button onClick={changeButtonText}>{buttonText}</button> 
        </div> 
      ); 
    } 
     

export default Deveti;