import React from 'react'

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      isHovering: false,
    }
  }

  handleMouseHover = () => {
    this.setState({isHovering: !this.state.isHovering});
  }

  onClick = (props) =>{
    console.log('a');
  }

  render(){
    return(
      <>
        {this.state.isHovering && <div class="tip">Applies to</div>}
        <div  contentEditable="false"
              className="wrong"
              onClick={this.onClick} 
              onMouseEnter={this.handleMouseHover}
              onMouseLeave={this.handleMouseHover}>
          {this.props.value}
        </div>
      </>
    )
  }
}

export default Result;