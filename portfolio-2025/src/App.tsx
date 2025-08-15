import './App.css'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from "@/components/theme/theme-provider.tsx"


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
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Routes>
        {RoutesPages.map((route) => (
          <Route
            key={route.link}
            path={route.link}
            element={<route.component />}
          />
        ))}
      </Routes>
    </ThemeProvider>
  )
}

export default App
