import React from 'react';
import eventEmitter from '../tools/eventEmitter';
class Child extends React.Component {
    // constructor(){
    //     super()
    //     this.state = {
    //         value:null
    //     }
    // }
    toParent(){
      // const {onName} = this.props
      // this.props.onName('guchao')
      eventEmitter.emit('EVENT','guchaolalallallal')
    }
    render() {
      const {name} = this.props
      return (
        <div>
          <span onClick={()=>this.toParent()}>{name}</span>
          <button className="square" onClick={()=>this.props.onClick()}>
          {this.props.value}
        </button>
        </div>
      );
    }
}

export default Child
  