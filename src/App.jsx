import { useState } from 'react'
import ImageDisplaySection from './components/ImageDisplaySection/ImageDisplaySection'
import './App.scss'

function App() {
  // const [query, setQuery] = useState('');
  // const [color, setColor] = useState('');

  // For testing
  const query='nature';
  const color='008080';

  return (
    <main className='image'>
      <ImageDisplaySection query={query} color={color} />
    </main>
  )
}

export default App
