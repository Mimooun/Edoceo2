import React from 'react'
import HeroLayout from './Herolayout'
import Chatbot from './Chatbot'
import Navbar from './Navbar'
import Presentation from './Presentation'
import  Footer from './Footer'
import Carte from  './Carte'
import Contact from './Contact'
import Collaborateurs from './Collaborateurs'
import ExpertiseSection from './Expertise'

function HomePage() {
  return (
    <div>
        <Navbar />
        <HeroLayout />
        <Presentation />
        <Collaborateurs />
        <ExpertiseSection />
        <Chatbot />
        <Footer/>
    </div>
  )
}

export default HomePage