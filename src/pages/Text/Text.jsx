import React from 'react'
import './Text.css'
import loading from '../../load.gif'
import axios from 'axios'
import Highlight from '../../components/Highlight/Highlight'
import processString from 'react-process-string'
import back from '../../assets/img/back.svg'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

class Text extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      baseUrl: process.env.PUBLIC_URL,
      text: '',
      loading: false,
      config: [],
      percentage: 0,
      color: '#d6d6d6'
    }
  }

  setResult = (apiRes) => {
    let config = this.state.config
    
    apiRes[1].forEach(element => {
      config.push({
        regex: RegExp(element[0], 'gim'),
        fn: (key, result) => <Highlight key={key} text={result} sugestion={element[1]} color="red" />
      })
    });

    apiRes[10].forEach(element => {
      if(element !== ' '){
        config.push({
          regex: RegExp(element, 'gim'),
          fn: (key, result) => <Highlight key={key} text={result} sugestion="" color="yellow" />
        })
      }
    });
    this.setState({config})

    this.setState({percentage: Math.round(apiRes[15][1] * 100) / 100})
    if(this.state.percentage < 50){
      this.setState({color: '#e53935'})
    }else if(this.state.percentage < 75){
      this.setState({color: '#fdd835'})
    }else{
      this.setState({color: '#00C79A'})
    }

  }

  onChangeText = (text) => {
    this.setState({text})
  }

  handleClick = () => {
    this.setState({loading: true})
    const data = {
      text: this.state.text
    }
    axios.post(`https://opendatasciencelab.jnj.com:443/models/5f79f9cb7e0167595f257091/latest/model`, {data})
      .then(res => {
        const result = res.data.result;
        this.setResult(result)
        this.setState({loading: false})
      })
  }

  render(){
    return (
      <div className="main">
        <div className="title header"><img className="back" src={back} alt="" onClick={() => this.props.history.push(this.state.baseUrl)}/> Augmented Writing</div>
        <div className="body">

          <div className="form">
              <div className="input-container">
                <textarea 
                  onChange={(e) => this.onChangeText(e.target.value)}
                  className="input"
                  id="text">
                </textarea>
                { this.state.loading ?
                  <div className="btn-primary"><img width="20px" src={loading} alt="loading..." /></div>
                  :
                  <button className="btn-primary" onClick={this.handleClick}>Check</button>
                }
                
                <div className="input result" disabled>
                  {
                    processString(this.state.config)(this.state.text)
                  }
                </div>
              </div>
          </div>

          <div className="separator"></div>
          
          <div className="details">
              <div className="score">
                <CircularProgressbar
                  value={this.state.percentage}
                  text={`${this.state.percentage}%`}
                  styles={buildStyles({
                    // Rotation of path and trail, in number of turns (0-1)
                    rotation: 0.25,
                
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'round',
                
                    // Text size
                    textSize: '16px',
                
                    // How long animation takes to go from one percentage to another, in seconds
                    pathTransitionDuration: 0.5,
                
                    // Can specify path transition in more detail, or remove it entirely
                    // pathTransition: 'none',
                
                    // Colors
                    pathColor: this.state.color,
                    textColor: this.state.color,
                    trailColor: '#d6d6d6',
                    backgroundColor: '#3e98c7',
                  })}/>
                <span className="score-title">Flesch-Kincaid Score</span>
              </div>
              <div className="rules">
                <div className="rule">
                  <Highlight text="Some text" sugestion="" color="red" /><span className="rule-desc">is an active voice text</span>
                </div>
                <div className="rule">
                  <Highlight text="Some text" sugestion="" color="yellow" /><span className="rule-desc">is an uncommon word</span>
                </div>
              </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Text;
