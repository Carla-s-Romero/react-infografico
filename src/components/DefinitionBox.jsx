import React from 'react'

function DefinitionBox({ title, description, list, image }) {
  return (
    <div className="definition-box">
      <div className="definition-header">
        <h3>{title}</h3>
      </div>
      <div className="definition-body">
        {image && (
          <div className="definition-image-side">
            <img src={image} alt={title} className="definition-main-image" />
          </div>
        )}
        <div className="definition-content-side">
          <div className="definition-text">
            <p>{description}</p>
          </div>
          {list && list.length > 0 && (
            <ul className="definition-list">
              {list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default DefinitionBox
