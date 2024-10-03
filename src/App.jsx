import { useState } from 'react'
import './App.css';
import InputImage from './components/InputImages/InputImages';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <InputImage />
    </>
  )
}

export default App
