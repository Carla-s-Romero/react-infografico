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
      title: 'Validar Hipóteses',
      description: 'Testar, de forma rápida e objetiva, se a solução proposta realmente atende a uma necessidade do público-alvo, confirmando se o problema identificado é real e relevante.'
    },
    {
      title: 'Evitar riscos',
      description: 'Evitar o desperdício de tempo e dinheiro em funcionalidades que não são necessárias, lançando uma versão simplificada para testar a hipótese de valor e crescimento.'
    },
    {
      title: 'Identificar Funcionalidades',
      description: 'Descobrir quais recursos são essenciais e quais podem ser descartados'
    },
    {
      title: 'Validar Público-Alvo',
      description: 'Confirmar se o público-alvo está corretamente definido, verificando se o perfil escolhido corresponde às pessoas que realmente apresentam a necessidade ou o problema que a solução pretende resolver.'
    },
    {
      title: 'Coletar feedback',
      description: 'Obter informações valiosas dos usuários para entender seus comportamentos e identificar pontos de melhoria antes de investir recursos significativos em um desenvolvimento completo.'
    },
    {
      title: 'Acelerar o aprendizado',
      description: 'Acelerar o ciclo de desenvolvimento e aprendizado, permitindo que a empresa se adapte rapidamente com base nas reações do público.'
      
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

      <h3 className="subsection-title">Ciclo Build - Measure - Learn</h3>
      
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

      <h3 className="subsection-title objectives-title">Objetivos do MVP</h3>
      
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
