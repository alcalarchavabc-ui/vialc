import VialcHero from './VialcHero'
import VialcAbout from './VialcAbout'
import VialcBrief from './VialcBrief'

export default function App() {
  const params = new URLSearchParams(window.location.search)
  if (params.get('page') === 'brief') return <VialcBrief />
  if (params.get('page') === 'about') return <VialcAbout />
  return <VialcHero />
}