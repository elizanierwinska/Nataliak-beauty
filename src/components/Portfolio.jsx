import './Portfolio.css';

export default function Portfolio() {
  return <div className="portfolio">
    <div className="row">
      <div className="column">
        {/* <h1>Makijaże</h1> */}
        <img src="./images/makeup-portfolio.jpeg" alt="makeup"/>
        <img src="./images/makeup-portfolio-1.jpeg" alt="makeup"/>
        {/* <img src="./images/makeup-portfolio-2.jpeg" alt="makeup"/>
        <img src="./images/makeup-portfolio-3.jpeg" alt="makeup"/> */}
        <img src="./images/makeup-portfolio-4.jpeg" alt="makeup"/>
        <img src="./images/makeup-portfolio-5.jpeg" alt="makeup"/>
        {/* <img src="./images/makeup-portfolio-6.jpeg" alt="makeup"/> */}
        <img src="./images/makeup-portfolio-7.jpeg" alt="makeup"/>
        {/* <img src="./images/makeup-portfolio-8.jpeg" alt="makeup"/> */}
      </div>
      <div className="column">
        {/* <h1>Stylizacje brwi</h1> */}
        <img src="./images/brwi-portfolio.jpeg" alt="brwi"/>
        <img src="./images/brwi-portfolio-2.jpeg" alt="brwi"/>
        {/* <img src="./images/brwi-portfolio-3.jpeg" alt="brwi"/> */}
        <img src="./images/brwi-portfolio-4.jpeg" alt="brwi"/>
        <img src="./images/brwi-portfolio-5.jpeg" alt="brwi"/>
        <img src="./images/brwi-portfolio-6.jpeg" alt="brwi"/>
        <img src="./images/brwi-portfolio-7.jpeg" alt="brwi"/>
        <img src="./images/brwi-portfolio-8.jpeg" alt="brwi"/>
        {/* <img src="./images/brwi-portfolio-9.jpeg" alt="brwi"/> */}
      </div>
      <div className="column">
        {/* <h1>Stylizacje rzęs</h1> */}
        <img src="./images/rzęsy-portfolio.jpeg" alt="rzęsy"/>
        <img src="./images/rzęsy-portfolio-1.jpeg" alt="rzęsy"/>
        <img src="./images/rzęsy-portfolio-2.jpeg" alt="rzęsy"/>
        <img src="./images/rzęsy-portfolio-4.jpeg" alt="rzęsy"/>
        <img src="./images/rzęsy-portfolio-3.jpeg" alt="rzęsy"/>
      </div>
    </div>
  </div>
}