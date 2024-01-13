import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [count, setCount] = useState(0)
  const [length , setLength] = useState(8)
  const [password , setPassword] = useState('')
  const [number , setNumber] = useState(false)
  const [char , setChar] = useState(false)
  function generateAlphabeticPassword(length, number, char) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const characters = '*{_}()*&%$#!@%';
    let password = '';
  
    for (let i = 1; i <= length; i++) {
      const randomIndex = Math.floor(Math.random() * alphabet.length);
  
      if (number  === true) {
        password += numbers[Math.floor(Math.random() * numbers.length)];
        i++;
      }
  
      if (char === true) {
        password += characters[Math.floor(Math.random() * characters.length)];
        i++;
      }
  
      password += alphabet[randomIndex];
    }
  
    setPassword(password);
  }
  
  const handleCheckboxChange = (e) => {
    if(number === false){
      setNumber(true);
    }else{
      setNumber(false);
    }
  };

  const handleCheckbox2Change = (e) => {
    if(e.target.checked === true){
      setChar(e.target.checked);
    }
  };
  
  useEffect(()=>{
    generateAlphabeticPassword(length,number,char)
  } , [number,char,length]);
  return (
    <>
      <div className='container-fluid d-flex justify-content-center align-items-center w-100' style={{ height: '100vh' }}>
        <div className="control-section bg-success w-50 p-3">
          <h1 className='text-white text-center'>Password Generator</h1>
          <input type="text" className='form-control mt-5 bg-secondary border-0' value={password} />
          <div className='row mt-5 text-white'>
            <div className="col-md-4">
              <label htmlFor="">Length : {length}</label><br />
              <input type="range" min={6} max={100} className='cursor-pointer 'onChange={(e) => {setLength(e.target.value)} } />
            </div>
            <div className="col-md-4">
              <label htmlFor="">Number</label>
              <input type="checkbox" className='form-check' checked={number} onChange={handleCheckboxChange}/>           
            </div>
            <div className="col-md-4">
              <label htmlFor="">Special Characters</label>
              <input type="checkbox" className='form-check' checked={char} onChange={handleCheckbox2Change}/>           
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
