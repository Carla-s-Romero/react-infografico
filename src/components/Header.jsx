import React from 'react'

function Header() {
  return (
    <div className="header">
      {/* Background decorative elements */}
      <div className="header-bg-decoration">
        <div className="floating-circle circle-1"></div>
        <div className="floating-circle circle-2"></div>
        <div className="floating-circle circle-3"></div>
      </div>
      
      {/* Animated waves */}
      <svg className="header-wave-top" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,50 C300,90 900,10 1200,50 L1200,0 L0,0 Z" fill="url(#gradient1)" opacity="0.3"/>
      </svg>
      <svg className="header-wave-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,50 C300,10 900,90 1200,50 L1200,120 L0,120 Z" fill="url(#gradient2)" opacity="0.2"/>
      </svg>
      
      {/* Gradients definition */}
      <svg width="0" height="0">
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{stopColor: '#667eea', stopOpacity: 1}} />
            <stop offset="100%" style={{stopColor: '#764ba2', stopOpacity: 1}} />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{stopColor: '#f093fb', stopOpacity: 1}} />
            <stop offset="100%" style={{stopColor: '#f5576c', stopOpacity: 1}} />
          </linearGradient>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor: '#667eea', stopOpacity: 1}} />
            <stop offset="100%" style={{stopColor: '#764ba2', stopOpacity: 1}} />
          </linearGradient>
        </defs>
      </svg>
      
      <div className="header-content">
        {/* Logo with animation */}
        <div className="header-logo">
          <svg width="100" height="100" viewBox="0 0 100 100" className="logo-svg">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <circle cx="50" cy="50" r="45" stroke="url(#logoGradient)" strokeWidth="3" fill="white" filter="url(#glow)" />
            <path d="M 35 45 L 45 55 L 65 35" stroke="url(#logoGradient)" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" className="checkmark"/>
            <circle cx="50" cy="50" r="15" fill="url(#logoGradient)" opacity="0.2" className="pulse-circle"/>
          </svg>
        </div>
        
        {/* Main title section */}
        <div className="header-text">
          <div className="header-badges">
            <span className="badge">📊 Análise</span>
            <span className="badge">🚀 Estratégia</span>
            <span className="badge">📈 Crescimento</span>
          </div>
          <h1 className="header-title">
            <span className="title-gradient">Infográfico</span> MVP & NPS
          </h1>
          <p className="header-subtitle">Estratégias Essenciais para Validação e Satisfação do Cliente</p>
          <div className="header-divider"></div>
          <div className="header-stats">
            <div className="stat-item">
              <span className="stat-icon">💡</span>
              <span className="stat-text">Inovação</span>
            </div>
            <div className="stat-item">
              <span className="stat-icon">⚡</span>
              <span className="stat-text">Agilidade</span>
            </div>
            <div className="stat-item">
              <span className="stat-icon">🎯</span>
              <span className="stat-text">Precisão</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
