import { Routes, Route } from "react-router"
import { AppHeader } from "./cmps/AppHeader.jsx"
import { AppFooter } from "./cmps/AppFooter.jsx"
import { Home } from "./pages/Home.jsx"

export function App() {

  return (
    <div className="main-container">
    <AppHeader />

    <main>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>

    <AppFooter />
  </div>

  )
}