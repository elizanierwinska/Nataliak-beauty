import './Kontakt.css';
import { Link } from 'react-router-dom';

export default function Kontakt() {
  return <div className="kontakt">
    <h1>Skontaktuj się za mną przez:</h1>
    <div className="kontakt-icons">
      <Link to="https://www.facebook.com/profile.php?id=100066869613399">
        <img src="./images/facebook-icon.webp" alt="facebook icon"/>
      </Link>
      <Link to="https://www.instagram.com/nataliak_beauty/">
        <img src="./images/instagram-icon.webp" alt="instagram icon"/>
      </Link>
      <Link to="mailto:Natalia.koryszewska@wp.pl">
        <img id="email-icon" src="./images/email-icon.webp" alt="facebook icon"/>
      </Link>
    </div>
  </div>
}