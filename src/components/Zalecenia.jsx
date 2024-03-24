import './Zalecenia.css';

export default function Zalecenia() {
  return( 
  <div className='zalecenia'>
    <div className="zalecania-container">
      <div className="zalecenia-brwi">
        <h1>Stylizacja Brwi</h1>
        <p><b>Laminacja brwi z farbowaniem</b></p>
        <p>Czas wykonywania usługi: 1,5h</p>
        <p><b>Laminacja brwi</b></p>
        <p>Czas wykonywania usługi: 50min</p>
        <h3>PRZECIWSKAZANIA</h3>
        <ul>
          <li>ciąża</li>
          <li>sucha skura w brwiach, podrażnienia</li>
          <li>krótki lub przycięty włos</li>
          <li>włos cienki z ubytkami</li>
          <li>zabiegi złuszczające przed zabiiegiem</li>
          <li>stosowanie izoteku</li>
        </ul>
        <h3>WSKAZANIA</h3>
        <ul>
          <li>brwi trudne do ujarzmienia</li>
          <li>brwi bez kształtu</li>
          <li>włoski brwi są bardzo sztywne</li>
          <li>szybko wypłukują kolor po koloryzacji brwi</li>
          <li>mają niepoprawny kierunek</li>
        </ul>
        <p>*zabieg prezentuje się najkorzystniej , gdy klientka posiada pełną brew bez ubytków (szczególnie w dolnej linii brwi)</p>
        <h3>ZALECENIA</h3>
        <p>Po zabiegu laminacji brwi klientka powinna po 2 dni nawilać włoski olejkiem lub kremem arganowym! Brwi naley czesać i układać na MYDEŁKO lub ŻEL do brwi!</p>
      </div>
      <img src="./images/brow-zalecenia-1.jpeg"/>
    </div>
  </div>)
}