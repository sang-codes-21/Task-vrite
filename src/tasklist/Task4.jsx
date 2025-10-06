import React from 'react'

const Task4 = () => {
  const cols = 50
  const rows = 10
  const TotalCell = cols * rows

  const [filled, setfilled] = React.useState(new Set())
  const cells = Array.from({ length: TotalCell }, (_, index) => index)

  React.useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * TotalCell)
      setfilled(prev => {
        const newSet = new Set(prev)
        newSet.add(randomIndex)
        return newSet
      })
    }, 100) // fill every 100ms, adjust as needed

    return () => clearInterval(interval) // cleanup on unmount
  }, [])

  return (
    <div className="h-screen flex justify-center items-center p-10">
      <div
        className="grid border "
        style={{
          gridTemplateColumns: `repeat(${cols}, 20px)`,
          gridTemplateRows: `repeat(${rows}, 20px)`,
        }}
      >
        {cells.map(index => (
          <div
            key={index}
            className={`w-5 h-5 border border-gray-700 transition-colors duration-300 ${
              filled.has(index) ? 'bg-purple-600' : 'bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default Task4
