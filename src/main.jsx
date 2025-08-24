
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify';
import Dev from './components/Dev.jsx'


createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Dev/>
    <ToastContainer position="top-center" />
  </>

  ,
)
