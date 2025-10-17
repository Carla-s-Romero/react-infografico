import React from 'react'
import DefinitionBox from './DefinitionBox'
import CycleStep from './CycleStep'
import ObjectiveCard from './ObjectiveCard'
import ericRiesImg from '../img/EricRies.jpg'

function MVPSection() {
  const cycleSteps = [
    {
      number: 1,
      title: 'BUILD',
      description: 'Construir uma versão simples da solução'
    },
    {
      number: 2,
      title: 'MEASURE',
      description: 'Medir e coletar dados sobre o uso'
    },
    {
      number: 3,
      title: 'LEARN',
      description: 'Aprender e ajustar com base no feedback'
    }
  ]

  const objectives = [
    {
      title: '✓ Validar Hipóteses',
      description: 'Testar se a solução resolve um problema real do público'
    },
    {
      title: '✓ Economizar Recursos',
      description: 'Reduzir tempo e dinheiro investidos antes da validação'
    },
    {
      title: '✓ Identificar Funcionalidades',
      description: 'Descobrir quais recursos são essenciais e quais podem ser descartados'
    },
    {
      title: '✓ Validar Público-Alvo',
      description: 'Confirmar se o público foi bem definido'
    }
  ]

  return (
    <div className="section">
      <h2 className="section-title">MVP - Produto Mínimo Viável</h2>
      
      <DefinitionBox 
        title="1. O que é MVP?"
        description="Minimum Viable Product (Produto Mínimo Viável) é uma estratégia que permite testar uma ideia de produto ou serviço com o mínimo de recursos, de forma rápida e eficiente, para validar hipóteses com clientes reais antes de investir em desenvolvimento completo."
      />

      <DefinitionBox 
        title="2. Origem"
        description={<>Popularizado por <span className="highlight">Eric Ries</span> no livro <em>"A Startup Enxuta" (The Lean Startup) e baseado em três princípios:</em></>}
        image={ericRiesImg}
        list={[
          "Construir (Build) – Desenvolver uma versão simples da solução",
          "Medir (Measure) – Coletar dados sobre o uso ou aceitação do produto",
          "Aprender (Learn) – Analisar resultados e ajustar a solução com base no feedback"
        ]}
      />

      <h3 className="subsection-title">🔄 Ciclo Build - Measure - Learn</h3>
      
      <div className="cycle-container">
        {cycleSteps.map((step) => (
          <CycleStep 
            key={step.number}
            number={step.number}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>

      <h3 className="subsection-title objectives-title">🎯 Objetivos do MVP</h3>
      
      <div className="objectives-grid">
        {objectives.map((obj, index) => (
          <ObjectiveCard 
            key={index}
            title={obj.title}
            description={obj.description}
          />
        ))}
      </div>
    </div>
  )
}

export default MVPSection
