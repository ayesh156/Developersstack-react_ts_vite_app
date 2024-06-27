import React, { useState } from 'react';
import './App.css';

// React Class base componenet

/*

class Counter extends React.Component<{},{count:number}>{
  constructor(props:{}){
    super(props);
    this.state={
      count:0
    }
  }

  increment=()=>{
    this.setState((lastState)=>({
      count:lastState.count+1
    }))
  }

  decrement=()=>{
    this.setState((lastState)=>({
      count:lastState.count-1
    }))
  }

  render() {
    return(
      <div className='container'>
      <h1>Count: {this.state.count}</h1>
      <button className='btn btn-primary' onClick={this.increment}>Increment</button> | <button className='btn btn-danger' onClick={this.decrement}>Decrement</button>
    </div>
    )
  }
}

export default Counter; */

// React function base componenet

const Counter: React.FC=()=>{
  const [count,setCount] = useState<number>(0);
  
  return (
    <div className='container'>
      <h1>Count: {count}</h1>
      <button className='btn btn-primary' onClick={()=>setCount(count+1)}>Increment</button> | <button className='btn btn-danger' onClick={()=>setCount(count-1)}>Decrement</button>
    </div>
  )
}



export default Counter;
