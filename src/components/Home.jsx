import './Home.css';
import { Link } from 'react-router-dom'

export default function Home() {
  return (<div className="Home">
    <div className="top-container">
      <img className="main-img" src="./images/natalia-main.jpeg" alt="zdjęcie Natalii" />
      <img className="second-img" src="./images/natalia.jpeg" alt="zdjęcie Natalii" />
      <img className="third-img" src="./images/natalia-2.jpeg" alt="zdjęcie Natalii" />
      <h1>NataliaK Beauty</h1>
      <h2>MAKIJAŻ | STYLIZACJA BRWI I RZĘS <Link to="/cennik">→</Link></h2>
    </div>
    <div className="about-container"></div>
  </div>)
}


