import VialcHero from './VialcHero'
import VialcBrief from './VialcBrief'

export default function App() {
  const params = new URLSearchParams(window.location.search)
  if (params.get('page') === 'brief') return <VialcBrief />
  return <VialcHero />
}