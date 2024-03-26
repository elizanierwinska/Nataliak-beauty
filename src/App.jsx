import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Layout from './components/Layout'
import Cennik from './components/Cennik';
import Zalecenia from './components/Zalecenia';
import Regulamin from './components/Regulamin.jsx';
import Ankieta from './components/Ankieta.jsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
        <Route path="/" element={<Home/>} />
        <Route path="/cennik" element={<Cennik />} />
        <Route path="/zalecenia" element={<Zalecenia />} />
        <Route path="/regulamin" element={<Regulamin />} />
        <Route path="/ankieta" element={<Ankieta />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
