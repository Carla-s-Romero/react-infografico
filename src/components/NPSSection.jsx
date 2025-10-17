import React from 'react'
import DefinitionBox from './DefinitionBox'
import NPSGroup from './NPSGroup'
import FormulaBox from './FormulaBox'
import ZonesTable from './ZonesTable'
import ExampleBox from './ExampleBox'
import ObjectiveCard from './ObjectiveCard'

function NPSSection() {
  const npsGroups = [
    {
      type: 'promotores',
      emoji: '😍',
      title: 'PROMOTORES',
      score: '9-10',
      profile: 'Entusiasmados',
      description: 'Leais e divulgam positivamente a marca'
    },
    {
      type: 'neutros',
      emoji: '😐',
      title: 'NEUTROS',
      score: '7-8',
      profile: 'Indiferentes',
      description: 'Satisfeitos, mas não entusiastas. Podem mudar de marca facilmente'
    },
    {
      type: 'detratores',
      emoji: '😤',
      title: 'DETRATORES',
      score: '0-6',
      profile: 'Insatisfeitos',
      description: 'Experiência negativa, tendem a desaconselhar'
    }
  ]

  const cycleContinuo = [
    {
      title: '1️⃣ Medir',
      description: 'Coletar as respostas dos usuários'
    },
    {
      title: '2️⃣ Analisar',
      description: 'Identificar os motivos de promotores e detratores'
    },
    {
      title: '3️⃣ Agir',
      description: 'Corrigir falhas e reforçar pontos fortes'
    },
    {
      title: '4️⃣ Acompanhar',
      description: 'Reaplicar a pesquisa periodicamente'
    }
  ]

  return (
    <div className="section">
      <h2 className="section-title">NPS - Net Promoter Score</h2>
      
      <DefinitionBox 
        title="1. O que é NPS?"
        description={<>O <strong>Net Promoter Score</strong> é uma metodologia criada por <span className="highlight">Fred Reichheld</span> (Bain & Company) para medir o nível de satisfação e lealdade dos clientes em relação a uma empresa, produto ou serviço. Ele é considerado uma das métricas mais utilizadas no mundo para avaliar a experiência do cliente de forma simples, rápida e eficaz.
        </>}
      />

      <DefinitionBox 
        title="2. Pergunta Principal"
        description={
          <p style={{fontSize: '1.2em', fontStyle: 'italic', textAlign: 'center', marginTop: '15px'}}>
            "Em uma escala de 0 a 10, o quanto você recomendaria nossa empresa/produto/serviço a um amigo ou colega?"
          </p>
        }
      />

      <h3 className="subsection-title">Classificação dos Clientes</h3>
      
      <div className="nps-groups">
        {npsGroups.map((group) => (
          <NPSGroup 
            key={group.type}
            type={group.type}
            emoji={group.emoji}
            title={group.title}
            score={group.score}
            profile={group.profile}
            description={group.description}
          />
        ))}
      </div>

      <h3 className="subsection-title">🧮 Cálculo do NPS</h3>
      <FormulaBox />

      <h3 className="subsection-title">📊 Zonas de Interpretação</h3>
      <ZonesTable />

      <h3 className="subsection-title">💡 Exemplo Prático</h3>
      <ExampleBox />

      <h3 className="subsection-title">Ciclo de Melhoria Contínua</h3>
      <div className="objectives-grid">
        {cycleContinuo.map((item, index) => (
          <ObjectiveCard 
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  )
}

export default NPSSection
