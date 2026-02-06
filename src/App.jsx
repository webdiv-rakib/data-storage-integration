import { useEffect, useState } from 'react'
import './App.css'
import Watch from './components/Watch/Watch'

function App() {
  const [watches, setWatches] = useState([]);
  useEffect(() => {
    fetch('watches.json')
      .then(res => res.json())
      .then(data => setWatches(data))
      .catch(err => console.log(err))
  }, [])
  // const watches = [
  //   { id: 1, name: 'Apple Watch', price: 12000 },
  //   { id: 2, name: 'Samsung Watch', price: 10000 },
  //   { id: 3, name: 'MI Watch', price: 8000 },
  // ]

  return (
    <>
      <h1>Vite + React</h1>
      {
        watches.map(watch => <Watch watch={watch} key={watch.id}></Watch>)
      }
    </>
  )
}

export default App
