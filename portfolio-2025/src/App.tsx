import './App.css'
import { Routes, Route } from 'react-router-dom'


// COMPONENTS
import Home from './pages/home'
import Contact from './pages/contact'

function App() {
  const RoutesPages = [
    {
      component: Home,
      link: '/',
    },
    {
      component: Contact,
      link: '/contact',
    }
  ]
  return (
      <Routes>
        {RoutesPages.map((route) => (
          <Route
            key={route.link}
            path={route.link}
            element={<route.component />}
          />
        ))}
      </Routes>
  )
}

export default App
