import React from 'react'

function ExampleBox() {
  return (
    <div className="example-box">
      <h3>📝 Cenário: 100 clientes responderam</h3>
      
      <div className="example-calc">
        <div className="data">
          ✓ <strong>60 clientes</strong> deram notas 9-10 (Promotores) = <strong>60%</strong>
        </div>
        <div className="data">
          ✓ <strong>25 clientes</strong> deram notas 7-8 (Neutros) = <strong>25%</strong>
        </div>
        <div className="data">
          ✓ <strong>15 clientes</strong> deram notas 0-6 (Detratores) = <strong>15%</strong>
        </div>
        
        <div className="calculation">
          <p><strong>Cálculo:</strong></p>
          <p className="calc-formula">NPS = 60% − 15% = <strong>45</strong></p>
        </div>
        
        <div className="result">
          📊 Resultado: NPS 45 → Zona de Aperfeiçoamento
        </div>
        
        <p className="conclusion">
          <strong>Conclusão:</strong> Clientes estão satisfeitos, mas ainda há espaço para melhorar a experiência.
        </p>
      </div>
    </div>
  )
}

export default ExampleBox
