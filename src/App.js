import { useState } from 'react';
import axios from 'axios';
import AppLogo from './logo-app.png';
import CGLogo  from './logo.png';
import './App.css';

function App() {
  const [prompt,setPrompt]=useState('');
  const [response,setResponse]=useState('');
  const[loading,setLoading]=useState(false);
  const handleSubmit=(e)=>{
    e.preventDefault();
    setLoading(true);
    axios
    .post("http://localhost:5555/chat",{prompt})
    .then((res)=>{
      setResponse(res.data);
      setLoading(false);
    })
    .catch((err)=>{
      console.error(err);
    })
  }
  return (
    <div className="wrapper">
        <img src={AppLogo} className="app-logo" alt="logo" />
        <form onSubmit={handleSubmit}>
          <img src={CGLogo} alt="cglogo" className={loading?'cg-logo loading':'cg-logo'}/>
          <input type='text' value={prompt} onChange={(e)=>setPrompt(e.target.value)} placeholder='Ask anything...'/>
          <button type='submit'>Ask</button>
        </form>
        <p className='response'>
          {loading ? 'Loading:(...':response}
          {/*Here is the solution for all your queries;)*/}
        </p>
        <div className='footer'>~DocLedge ChatBot~</div>
    </div>
  );
}

export default App;
