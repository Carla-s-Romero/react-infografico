import React from 'react'

function FormulaBox() {
  return (
    <div className="formula-box">
      <h3 style={{color: '#333', marginBottom: '20px'}}>Fórmula</h3>
      <div className="formula">NPS = %Promotores − %Detratores</div>
      <p style={{color: '#555', marginTop: '20px', fontSize: '1.1em'}}>
        Resultado varia de <strong>-100 a +100</strong>
      </p>
    </div>
  )
}

export default FormulaBox
