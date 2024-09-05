import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { checkForNewBuild } from './checkForNewBuild'
import { Route, Routes } from 'react-router-dom'
import LogInPage from './pages/login-page'

function App() {
  const [count, setCount] = useState(0)


  useEffect(() => {
    const intervalId = setInterval(checkForNewBuild, 2000);

    return () => clearInterval(intervalId); 
  }, []);

  

  return (
    <>
    <Routes>
      <Route path='/login' element={<LogInPage />} />
    </Routes>
    
      <h1>Vite + React 11111111111111111111111111111111111111111111111111111111</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
