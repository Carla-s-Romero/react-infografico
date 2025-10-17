import React from 'react'

function ZonesTable() {
  const zones = [
    {
      range: '-100 a 0',
      classification: 'Zona Crítica',
      interpretation: 'Alta insatisfação dos clientes',
      className: 'zone-critica'
    },
    {
      range: '1 a 50',
      classification: 'Zona de Aperfeiçoamento',
      interpretation: 'Clientes satisfeitos, mas há espaço para melhorar',
      className: 'zone-aperfeicoamento'
    },
    {
      range: '51 a 75',
      classification: 'Zona de Qualidade',
      interpretation: 'Alto nível de satisfação e fidelização',
      className: 'zone-qualidade'
    },
    {
      range: '76 a 100',
      classification: 'Zona de Excelência',
      interpretation: 'Clientes fiéis, promotores ativos da marca',
      className: 'zone-excelencia'
    }
  ]

  return (
    <div className="zones-table">
      <table>
        <thead>
          <tr>
            <th>Faixa NPS</th>
            <th>Classificação</th>
            <th>Interpretação</th>
          </tr>
        </thead>
        <tbody>
          {zones.map((zone, index) => (
            <tr key={index} className={zone.className}>
              <td><strong>{zone.range}</strong></td>
              <td><strong>{zone.classification}</strong></td>
              <td>{zone.interpretation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ZonesTable
