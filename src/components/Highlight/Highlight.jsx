import React from 'react'

class Highlight extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      isHovering: false,
    }
  }

  handleMouseHover = () => {
    this.setState({isHovering: !this.state.isHovering});
  }

  handleClick = (props) =>{
    console.log('a');
  }

  render(){
    return(
      <>
        <div className="highlight" onClick={() => this.handleClick()}>
            <span className="sugestion">
                {this.props.sugestion}
            </span>
            {this.props.text}
        </div>
      </>
    )
  }
}

export default Highlight;