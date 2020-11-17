import React from 'react'
import './Highlight.css'

class Highlight extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      isHovering: false,
    }
  }

  handleClick = () => {
    this.setState({isHovering: !this.state.isHovering});
  }

  render(){
    return(
      <>
        {
          (this.state.isHovering && this.props.sugestion) ?
            <span className="sugestion">
              {this.props.sugestion}
            </span>
          :
          <></>
        }
        <span  className={'highlight '+this.props.color}
              onMouseEnter={this.handleClick}
              onMouseLeave={this.handleClick}>

          {this.props.text}
        </span>
      </>
    )
  }
}

export default Highlight;