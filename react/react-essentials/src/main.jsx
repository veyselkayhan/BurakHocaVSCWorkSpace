
/** 
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
*/


import {createRoot} from 'react-dom/client';
import './index.css';
const  rootEl = document.getElementById("root");
const root = createRoot (rootEl);

root.render(<div><header><Logo></Logo></header><main>m <Mybutton></Mybutton></main><footer>f</footer></div>);




/**
 * Components -Adı büyük harf ile başlayan fonksiyonlar
 * 
 */

function Logo(){
  return <h1>Logo</h1>;
}

function Mybutton(){
  return <button>Hello me!</button>
}

function TestComponent(){
  const jsxEl = <p>Testing,testing,testing</p>
}
