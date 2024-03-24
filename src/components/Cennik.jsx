import './Cennik.css'

export default function Cennik() {
  return (
  <div className="container">
    <div className="outer-container">
      <div className="cennik">
        <h1>Cennik</h1>
        <h3>MAKIJAŻE</h3>
        <hr />
        <div className="flex">
          <p>Okolicznościowy</p>
          <p><b>180zł</b></p>
        </div>
        <div className="flex">
          <p>Ślubny</p>
          <p><b>220zł</b></p>
        </div>
        <div className="flex">
          <p>Wieczorowy</p>
          <p><b>190zł</b></p>
        </div>
        <div className="flex">
          <p>Na sesję fotograficzną</p>
          <p><b>200zł</b></p>
        </div>
        <h3>STYLIZACJA BRWI</h3>
        <hr />
        <div className="flex">
          <p>Laminacja z farbowaniem</p>
          <p><b>100zł</b></p>
        </div>
        <div className="flex">
          <p>Laminacja</p>
          <p><b>90zł</b></p>
        </div>
        <div className="flex">
          <p>Henna z regulacją</p>
          <p><b>70zł</b></p>
        </div>
        <div className="flex">
          <p>Farbka z regulacją</p>
          <p><b>70zł</b></p>
        </div>
        <div className="flex">
          <p>Regulacja brwi</p>
          <p><b>50zł</b></p>
        </div>
        <h3>STYLIZACJA RZĘS</h3>
        <hr />
        <div className="flex">
          <p>Lifting z farbowaniem</p>
          <p><b>100zł</b></p>
        </div>
        <div className="flex">
          <p>Farbowanie rzęs</p>
          <p><b>40zł</b></p>
        </div>
      </div>
    </div>
  </div>
  )
}