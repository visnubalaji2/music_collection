
import Overview from "./pages/overview"
import Collection from "./pages/collection"
import './styles/App.css'

import { Routes, Route, Navigate } from 'react-router-dom';
function App() {
 

  return (
    <>
  <Routes>
      <Route path="/" element={<Navigate to="/overview" />} />

      <Route path="/overview" element={<Overview />} />

      <Route path="/collection" element={<Collection />} />
    </Routes>
    </>
  )
}

export default App
