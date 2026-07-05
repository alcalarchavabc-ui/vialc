import VialcHero from './VialcHero'
import VialcAbout from './VialcAbout'
import VialcBrief from './VialcBrief'
import VialcServices from './VialcServices'
import VialcServicioWeb from './VialcServicioWeb'

export default function App() {
  const params = new URLSearchParams(window.location.search)
  if (params.get('page') === 'brief') return <VialcBrief />
  if (params.get('page') === 'about') return <VialcAbout />
  if (params.get('page') === 'services') return <VialcServices />
  if (params.get('page') === 'servicio-web') return <VialcServicioWeb />
  return <VialcHero />
}
