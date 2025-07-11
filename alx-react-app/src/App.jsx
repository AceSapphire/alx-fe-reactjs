// import WelcomeMessage from "./components/WelcomeMessage"
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'
import React from 'react'

const App = () => {
  return (
    // <WelcomeMessage />
    <div>
      <Header />
      <MainContent />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <Footer />
    </div>
  )
}

export default App