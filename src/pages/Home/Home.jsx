import React from 'react';
import './Home.css'
import img1 from '../../assets/img/img1.svg'
import img2 from '../../assets/img/img2.svg'
import user from '../../assets/img/user.svg'
import server from '../../assets/img/server.svg'
import location from '../../assets/img/location.svg'
import check from '../../assets/img/check.svg'
import facebook from '../../assets/img/facebook.svg'
import instagram from '../../assets/img/instagram.svg'
import twitter from '../../assets/img/twitter.svg'
import edu from '../../assets/img/edu.png'
import bg from '../../assets/img/bg.svg'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      baseUrl: process.env.PUBLIC_URL
    }
  }

  render(){
    return (
      <>
      <div className="main">
        <img className="bg" src={bg} alt=""/>
        <header>
          <div className="logo">Compliance Crafters</div>
          <ul>
            <li>About</li>
            <li>Features</li>
            <li>Team</li>
            <li>Help</li>
          </ul>
          <div className="login">
            <div className="signin">Sign In</div>
            <button className="btn secondary">Sign Up</button>
          </div>
        </header>
        <section>
          <div className="section-main">
            <div className="left">
              <div className="headline">
                <span className="title">Everyone can be a great writer</span>
                <span className="subtitle">Compose bold, clear, mistake-free writing with our AI-powered writing assistant</span>
                <button className="btn action" onClick={() => this.props.history.push(`${this.state.baseUrl}/text`)}>Get Started</button>
              </div>
            </div>
            <div className="right">
              <img src={img1} alt="" />
            </div>
          </div>

          <div className="info">
            <div className="detail">
              <img src={user} alt=""/>
              <div className="text">
                <span className="title">90+</span>
                <span className="subtitle">Users</span>
              </div>
            </div>

            <div className="sep"></div>

            <div className="detail">
              <img src={location} alt=""/>
              <div className="text">
                <span className="title">30+</span>
                <span className="subtitle">Locations</span>
              </div>
            </div>

            <div className="sep"></div>

            <div className="detail">
              <img src={server} alt=""/>
              <div className="text">
                <span className="title">50+</span>
                <span className="subtitle">Servers</span>
              </div>
            </div>
          </div>

          <div className="features">
            <img className="ilust" src={img2} alt="" />
            <div className="desc">
              <span className="desc-title">We Provide Many Features You Can Use</span>
              <span className="desc-subtitle">Explore all functionalities and improve yourself</span>
              <ul>
                <li><img src={check} alt=""/>Passive voice correction</li>
                <li><img src={check} alt=""/>Action verbs detection</li>
                <li><img src={check} alt=""/>Positively writing, in the affirmative</li>
                <li><img src={check} alt=""/>Complex words avoidance</li>
                <li><img src={check} alt=""/>Simple and readable sentences</li>
                <li><img src={check} alt=""/>Antagonistic words avoidance</li>
              </ul>
            </div>
          </div>

        </section>
      </div>

      <div className="team">
        <span className="team-title">Meet the team behind it</span>
        <span className="team-subtitle">We are a very diverse team, from all backgrounds</span>
        
        <div className="card-stack">

          <div className="card">
            <div className="card-header">
              <img src={edu} alt=""/>
              <div className="card-info">
                <span className="card-name">Eduardo Lima</span>
                <span className="card-function">IT Analyst</span>
              </div>
            </div>
          </div>

          <div className="card">
          <div className="card-header">
            <img src={edu} alt=""/>
            <div className="card-info">
              <span className="card-name">Eduardo Lima</span>
              <span className="card-function">IT Analyst</span>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <img src={edu} alt=""/>
            <div className="card-info">
              <span className="card-name">Eduardo Lima</span>
              <span className="card-function">IT Analyst</span>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <img src={edu} alt=""/>
            <div className="card-info">
              <span className="card-name">Eduardo Lima</span>
              <span className="card-function">IT Analyst</span>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <img src={edu} alt=""/>
            <div className="card-info">
              <span className="card-name">Eduardo Lima</span>
              <span className="card-function">IT Analyst</span>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <img src={edu} alt=""/>
            <div className="card-info">
              <span className="card-name">Eduardo Lima</span>
              <span className="card-function">IT Analyst</span>
            </div>
          </div>
        </div>
        </div>
      </div>

      <footer>
        <div className="news">
          <div className="left">
            <span className="title">Subscribe now and keep in touch!</span>
            <span className="subtitle">Let's subscribe with us and find the fun.</span>
          </div>
          <div className="right">
            <button className="btn action">Subscribe Now</button>
          </div>
        </div>

        <div className="footer-details">
          <div className="logo-info">
            <div className="logo">AWTeam5</div>
            <span>Our tool analyze words, score the content and make recommendations that help you improve the vocabulary and tone.</span>
            <div className="icons">
              <img src={facebook} alt=""/>
              <img src={twitter} alt=""/>
              <img src={instagram} alt=""/>
            </div>
            <span className="cop">©2020 Hackathon</span>
          </div>

          <div className="links">
            <ul>
              <li className="bold">Product</li>
              <li>About</li>
              <li>How it works</li>
              <li>Features</li>
              <li>Server</li>
            </ul>
            <ul>
              <li className="bold">Engage</li>
              <li>About us</li>
              <li>Contact us</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
            <ul>
              <li className="bold">Earn Money</li>
              <li>Affiliate</li>
              <li>Become Partner</li>
            </ul>
          </div>
        </div>
      </footer>
      </>
    )
  }
}

export default Home;
