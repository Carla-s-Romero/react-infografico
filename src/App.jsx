import React from 'react'
import Header from './components/Header'
import MVPSection from './components/MVPSection'
import NPSSection from './components/NPSSection'
import ConnectionBox from './components/ConnectionBox'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <div className="content">
          <MVPSection />
          <NPSSection />
          <ConnectionBox />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App
