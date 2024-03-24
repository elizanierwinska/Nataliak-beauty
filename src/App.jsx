import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Layout from './components/Layout'
import Cennik from './components/Cennik';
import Zalecenia from './components/Zalecenia';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
        <Route path="/" element={<Home/>} />
        <Route path="/cennik" element={<Cennik />} />
        <Route path="/zalecenia" element={<Zalecenia />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;