import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import useCountDown from './hook/useCountDown'
import formatTime from './hook/formatTime'

function App() {

  const [timeExpire, setTimeExpire] = useState(false);
  const { countDown } = useCountDown({seconds:10, setTimeExpire})


  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <h1>CountDown</h1>
        {!timeExpire ?
          <h2>{formatTime(countDown)}</h2>
          :
          <h2>Expired...</h2>
        }
      </div>
    </div>
  )
}

export default App
