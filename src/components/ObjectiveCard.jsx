import React, { useEffect, useRef, useState } from 'react'

function ObjectiveCard({ title, description }) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [])

  return (
    <div 
      ref={cardRef}
      className={`objective-card ${isVisible ? 'visible' : ''}`}
    >
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  )
}

export default ObjectiveCard
