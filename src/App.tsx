import { BrowserRouter, Routes, Route } from 'react-router-dom'
import VialcHero from './VialcHero'
import VialcBrief from './VialcBrief'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VialcHero />} />
        <Route path="/brief" element={<VialcBrief />} />
      </Routes>
    </BrowserRouter>
  )
}