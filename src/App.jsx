import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Dashboard from './pages/dashboard/Dashboard'
import Ads from './pages/ads/Ads'
import TextFillData from './pages/TextFillData'
import AdsFillData from './pages/AdsFillData'

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' Component={Dashboard}  />
          <Route path='/ads' Component={Ads} />
          <Route path='/TextFillData' Component={TextFillData} />
          <Route path='/AdsFillData' Component={AdsFillData} />
        </Routes>
      </Router>
    </>
  )
}

export default App
