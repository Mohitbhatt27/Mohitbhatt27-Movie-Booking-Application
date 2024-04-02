import './App.css'
import MainRoutes from './routes/MainRoutes';

function App() {

  console.log(import.meta.env.VITE_API_KEY); 
  return (
    <>
      <nav>Simple nav</nav>
      <MainRoutes />
    </>
  )
}

export default App