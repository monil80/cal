import React, { Component, Fragment } from 'react'

export default class Calc extends Component {
    state = { result : 0 }
    constructor(){
        super();
        this.firstValue = React.createRef();
        this.secondValue = React.createRef();
        this.operand = React.createRef();
        this.onCalculate = this.onCalculate.bind(this);
    }

    css =
    {
        height: '54vh',
        color: 'green',
        backgroundColor: "rgb(255,0,0)",

    }

   onCalculate(ev){
        const v1 = parseFloat(this.firstValue.current.value)
        const v2 = parseFloat(this.secondValue.current.value)
        const operand = this.operand.current.value;
        let res = 0.0;
       switch (operand) {
           case "+":
               res = v1 + v2;
               break;
           case "-":
               res = v1 - v2;
               break;
           case "X":
               res = v1 * v2;
               break;
           case "/":
               res = v1 / v2;
               break;
           default : break;    
       }
       this.setState({result : res});//used to set values to the objects of the state
       ev.preventDefault();
   }  

  render() {
    return (
        <>
      <div style={this.css} className=' bg-dark text-white'>

<div class="container">
<h2 className=' bg-dark text-white text-center '>My Calc Program</h2>
<br /><br />
  <div class="row">
    <div class="col-sm text-center">
    <input ref={this.firstValue} placeholder='First value'/>
    </div>
    <div class="col-sm text-center">
    <select ref={this.operand} className="form-select" aria-label="Default select example">
                <option>+</option>
                <option>-</option>
                <option>X</option>
                <option>/</option>
            </select>
    </div>
    <div class="col-sm text-center"> <input ref={this.secondValue} placeholder='Second value'/>  
    </div>
    <div class="col-sm text-center">
    <button onClick={this.onCalculate} className=' btn btn-secondary btn-lg  text-center btn-lg ' >Calculate</button>
    </div>
  </div>
</div>
       
        <p>
           
           
           
           
            <br /><br /><br />
            <h1 className=' bg-dark text-white text-center '>Result  : {this.state.result}</h1>
        </p>
       
    
      </div>
      <hr />
      </>

    )
  }
}