import { useState } from 'react'
import ImageDisplaySection from './components/ImageDisplaySection/ImageDisplaySection'
import './App.css'

function App() {
  // const [query, setQuery] = useState('');
  // const [color, setColor] = useState('');

  // For testing
  const query='nature';
  const color='#008000';

  return (
    <div>
      <ImageDisplaySection query={query} color={color} />
    </div>
  )
}

export default App
