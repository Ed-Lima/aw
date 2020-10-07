import React from 'react';
import './Home.css'
import Result from '../../components/Result'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      text: ''
    }
  }

  onChangeText = (text) => {
    text = 'a'
    this.setState({text})
    console.log(this.state.text)
  }

  render(){
    return (
      <div className="main">
        <span className="title">Augmented Writing</span>
        <div className="form">
            <div className="input-container">
              <p className="input-label noselect">Enter text</p>
              <div onInput={(e) => this.onChangeText(e.target.innerHTML)}
                   type="text" 
                   contentEditable="true"
                   className="input">
                Some text here to display the information which <Result value={"is applicable to"}></Result> the test of action verbs, please <Result value={"give consideration"}></Result> that this is only a test.
              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Login;
