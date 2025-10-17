import React, { useState } from 'react'

function CycleStep({ number, title, description }) {
  const [isAnimating, setIsAnimating] = useState(false)

  const handleClick = () => {
    setIsAnimating(true)
    setTimeout(() => setIsAnimating(false), 500)
  }

  return (
    <div 
      className={`cycle-step ${isAnimating ? 'pulse' : ''}`}
      onClick={handleClick}
    >
      <div className="number">{number}</div>
      <div className="title">{title}</div>
      <div className="description">{description}</div>
    </div>
  )
}

export default CycleStep
