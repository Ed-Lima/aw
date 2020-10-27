import React from 'react';
import './Home.css'
import loading from '../../load.gif'
import ReactDOM from 'react-dom';
import Result from '../../components/Result'
import axios from 'axios'
import ReactHtmlParser from 'react-html-parser'; 

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      text: '',
      loading: false,
      result: ''
    }
  }

  setResult = (apiRes) => {
    let result = this.state.text
    apiRes[1].forEach(element => {
      result = result.replaceAll(`${element[0]}`, `<span>${element[0]}</span>`)
    });
    this.setState({result})
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
        <span className="title">Augmented Writing</span>
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
                { ReactHtmlParser (this.state.result) }
              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Login;
