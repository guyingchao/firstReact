import React from 'react';
import eventEmitter from '../tools/eventEmitter';
class Child extends React.Component {
    state={
        message:'hello world'
    }
    componentDidMount(){
        eventEmitter.once('EVENT',(value)=>{
            this.setState({
                message:value
            })
            console.log(value)
        })
    }
    
    render() {
      const {message} = this.state
      return (
        <div>
          <span onClick={()=>this.spanClick}>{message}</span>
          <button className="square" onClick={()=>this.props.onClick()}>
          {this.props.value}
        </button>
        </div>
      );
    }
    componentWillUnmount(){
        eventEmitter.off('EVENT')
    }
}

export default Child
  