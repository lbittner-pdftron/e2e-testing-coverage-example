import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)

  // 100% test coverage is reported even though this is not called
  useEffect(() => {
    setCount2(count)
  }, [count])

  return (
    <div>
      <h1>Counter: {count}</h1>
      <p>Counter * 2: {count2 * 2}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  )
}

export default App
