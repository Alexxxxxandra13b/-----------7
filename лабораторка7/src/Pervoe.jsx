
// Создаём файл Header.js в папке src/ import React from 'react';
import { useState } from 'react';
function Pervoe() {
    const [name, setName] = useState("Саша");
    function change (){
        if (name== "НеСаша") setName("Саша") 
        else
        setName("НеСаша")
    }
    return (
        <header>
            <h1>Привет, мир!</h1>
           <h2>Привет, {name}! </h2>
           <button onClick={change}>
               кнопка
            </button>
        </header>
    );
}
export default Pervoe;