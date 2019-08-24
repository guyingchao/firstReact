import React from 'react';
import eventEmitter from '../tools/eventEmitter';
class Child extends React.Component {
    // constructor(){
    //     super()
    //     this.state = {
    //         value:null
    //     }
    // }
    // 子传父
    toParent(){
      // const {onName} = this.props
      this.props.onName('guchao')
    }
    // 兄弟之间传值
    toBrother(){
      eventEmitter.emit('EVENT','guchaolalallallal')
    }
    render() {
      const {name} = this.props
      return (
        <div>
          <span onClick={()=>this.toParent()}>{name}</span>
          <span onClick={()=>this.toBrother()}>兄弟</span>
          <button className="square" onClick={()=>this.props.onClick()}>
          {this.props.value}
        </button>
        </div>
      );
    }
}

export default Child
  