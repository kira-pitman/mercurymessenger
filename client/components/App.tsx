import { Outlet } from 'react-router-dom'
import Home from './Home'

function App() {
  return (
    <>
      <header className="header">
        <h1>beep bopo</h1>
        <Home />
      </header>
      <section className="main"></section>
      <footer className="footer"></footer>
    </>
  )
}

export default App
