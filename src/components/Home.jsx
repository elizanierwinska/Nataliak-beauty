import './Home.css';
import { Link } from 'react-router-dom'

export default function Home() {
  return (<div className="Home">
    <div className="top-container">
      <div className="title-flex">  
        <h1>NataliaK Beauty</h1>
        <h2>MAKIJAŻ | STYLIZACJA BRWI I RZĘS <Link to="/cennik">→</Link></h2>
      </div>
      <div className="img">
        <img className="main-img" src="./images/natalia-main.jpeg" alt="zdjęcie Natalii" />
        <img className="second-img" src="./images/natalia.jpeg" alt="zdjęcie Natalii" />
        <img className="third-img" src="./images/natalia-2.jpeg" alt="zdjęcie Natalii" />
      </div>
    </div>
    <div className="about-container">
      <h1>O mnie</h1>
      <div>
        <p>Cześć! Mam na imię Natalia i profesjonalnie wykonuję makijaż od 20xx roku. Makijaż pasjonował mnie od kiedy pamiętam, z tego względu każdą wolną chwilę poświęcałam nauce nowych technik i styli.xxxxxxxx. Jeśli masz jakiekolwiek pytania <Link to="/kontakt" className="link-to-contact">skontaktuj się ze mną</Link></p>
        <p id="signature">Natalia K.</p>
      </div>
    </div>
  </div>)
}


