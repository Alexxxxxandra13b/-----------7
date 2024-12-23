import React from 'react';
import Pervoe from './Pervoe';
import Footer from './Footer';
import './App.css';
import Counter from'./Counter';
import UserCard from'./UserCard';
import Button from'./Button';
import {useState} from'react';
import Tri from './Tri';
import Welcome from './Welcome';
import Sixxx from './Sixxx';
import Twooo from './Twooo';
import Tittle from './Tittle';
import List from './List';
import Chetire from './Chetire';
import Piaterochka from './Piaterochka';
import Semi from './Semi';
import Vosemi from './Vosemi';
import Deveti from './Deveti';
import Deseti from './Deseti';


function App() {
  const [show, setShow] =useState(true);
  const list = ['вода', 'сок', 'несок'];
 
  return (
    <div className="App">
      <Pervoe />
      <p>Это ваше первое React-приложение.</p>
      {show ?  <Counter/> :<></>  }
      <button onClick={() => setShow(!show)}>
                показать
            </button>
            <Twooo/>
            <Tri />
      <UserCard name="Петя" age={24}/>
      {/* <Onezd buttontext = 'Click'/>     */}
    
      <Button name="некнопо4ка"/>
      <Welcome name="Алексссандра"/>
      <Chetire/>
      <Piaterochka/>
      {show ?  <Sixxx /> :<></>  }
      
      <Tittle name="надо сдать работки"/>
      <List fruits={list}/>
      <Semi/> 
      <Vosemi/> 
      <Deveti/> 
      <Deseti/> 
      <Footer />
    </div>
  );
}
export default App;