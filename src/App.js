
import './App.css';
import saka from "./saka.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faSquareTwitter } from "@fortawesome/free-brands-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"


function App() {
  return (
    <div className='container'>
      <div className="App">
        <img src={saka} alt='Bukay Saka' />
        <main>
          <div id='info'>
            <h1 id='name'>Bukayo Saka</h1>
            <h4 id='description'>Professional Footballer</h4>
            <small id='email'>starboy@gmail.com</small>
            <a href='#'><FontAwesomeIcon className='envelope' icon={faEnvelope} /><span id='span'>Email</span></a>
          </div>
          <div className='about'>
            <ul>
              <li>
                <h3>About</h3>
                <p className='about-info'>I´m an English professional footballer who plays as a winger, left-back, or midfielder for Premier League club Arsenal and the England national team.  </p>
              </li>
              <li>
                <h3>Career</h3>
                <p className='about-info'>I´ve spent my entire first-team club career with Arsenal, where I have won an FA Cup and an FA Community Shield, progressively becoming one of Arsenal's most prolific and influential players.   </p>
              </li>
            </ul>
          </div>


        </main>
        <footer>
          <FontAwesomeIcon className='icon' icon={faSquareTwitter} />
          <FontAwesomeIcon className='icon' icon={faFacebook} />
          <FontAwesomeIcon className='icon' icon={faInstagram} />
          <FontAwesomeIcon className='icon' icon={faLinkedin} />
          <FontAwesomeIcon className='icon' icon={faGithub} />
        </footer>

      </div>
    </div>

  );
}

export default App;
