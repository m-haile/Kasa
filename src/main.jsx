import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Accueil from './pages/accueil/accueil.jsx'
import Header from './composants/Header/Header.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Accueil/>
  </StrictMode>,
)
