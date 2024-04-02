import './App.css'
import MainRoutes from './routes/MainRoutes';
import Navbar from './components/Navbar';

function App() {

  console.log(import.meta.env.VITE_API_KEY); 
  return (
    <>
      <Navbar/>
      <MainRoutes />
    </>
  )
}

export default App