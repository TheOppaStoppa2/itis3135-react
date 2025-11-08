import Header from './Header'
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <main>
         <Outlet />
        <h1>Welcome to My ITIS 3135 React Site</h1>
        <p>This will become your home page.</p>
      </main>
    </div>
  )
}

export default App
