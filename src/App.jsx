import { useEffect, useState } from 'react'
import { ReportGenerator } from './ReportGenerator'

const SAMPLE_DATA = [
  { value: 10 },
  { value: 20 },
  { value: 30 },
]

function App() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  const [report, setReport] = useState(null)

  // 100% test coverage is reported even though this is not covered by e2e tests.
  useEffect(() => {
    setCount2(count)
  }, [count])

  return (
    <div>
      <h1>Counter: {count}</h1>
      <p>Counter * 2: {count2 * 2}</p>
      <button onClick={() => {
        setCount(count + 1)
        const generator = new ReportGenerator(SAMPLE_DATA)
        setReport(generator.generateReport())
      }}>Increment</button>

      <hr />

      <p>Report:</p>
      <pre>{report ? JSON.stringify(report, null, 2) : 'No report generated yet.'}</pre>
    </div>
  )
}

export default App
