import React from 'react'

function NPSGroup({ type, emoji, title, score, profile, description }) {
  return (
    <div className={`nps-group ${type}`}>
      <h3>{emoji} {title}</h3>
      <div className="score">{score}</div>
      <p><strong>{profile}</strong></p>
      <p>{description}</p>
    </div>
  )
}

export default NPSGroup
