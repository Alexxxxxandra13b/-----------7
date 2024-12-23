
// Создаём файл Header.js в папке src/ import React from 'react';
import { useState } from 'react';
function Header() {
    const [name, setName] = useState("Петя");
    function change (){
        if (name== "НеПетя") setName("Петя") 
        else
        setName("НеОлег")
    }
    return (
        <header>
            <h1>Привет, мир!</h1>
           <h2>Привет, {name}! </h2>
           <button onClick={change}>
               кнопо4ка
            </button>
        </header>
    );
}
export default Header;