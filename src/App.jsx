import { useState } from 'react'
import { MenuBar } from './components/MenuBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MenuBar/>
    </>
  )
}

export default App
