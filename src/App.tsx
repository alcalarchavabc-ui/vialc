import VialcHero from './VialcHero'
import VialcBrief from './VialcBrief'

export default function App() {
  const path = window.location.pathname
  
  if (path === '/brief') {
    return <VialcBrief />
  }
  
  return <VialcHero />
}