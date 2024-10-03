import { useState } from 'react'
import './App.css';
import InputImage from './components/InputImages/InputImages';
import ImageDisplaySection from './components/ImageDisplaySection/ImageDisplaySection'
import './App.scss'

function App() {
  // const [query, setQuery] = useState('');
  // const [color, setColor] = useState('');

  // For testing
  const query='nature';
  const color='008080';

  return (
    <>
      <InputImage />
      <ImageDisplaySection query={query} color={color} />
    </>
  )
}

export default App
