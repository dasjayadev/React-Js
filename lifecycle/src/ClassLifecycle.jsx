import React, { Component } from 'react';




export class ClassLifecycle extends Component{
    constructor(){ //This id the 1st  method of mounting phase
        super()
        this.state = {
            count: 0,
            color:"lightblue"
            };
    }
    static getDerivedStateFromProps(props, state){ //this method is use to assigne props data as a start
        // console.log(props, state);
        console.log("this is getDerivedStateFromProps method");
        return state.color = props.color
    }
    
    componentDidMount(){    //this is the last method mounting,its only exicute after inicial rander
        console.log("This is componentDidMount Method");
    }

    shouldComponentUpdate() { //it is the 2nd method of updating phase,which handels the component re-randaring
        console.log("shouldComponentUpdate Method");
        return true   // if we put false then it will not exicute the rander
    }

    getSnapshotBeforeUpdate(prevProp, prevStat) {//it catch the previous props and state value
    //    console.log('The snapshot', document.getElementById('text').value );
        console.log("this is getSnapshotBeforeUpdate");
        return null;
    }

    componentDidUpdate(prevProp, prevStat, snapshot) { //this is the last method of udating phase it exicute after getSnapshotBeforeUpdate.
        console.log("componentDidUpdate Method")
    }

    componentWillUnmount(){ //before removing the component from dom,updating phase
        console.log( "This is componentWillUnmount Method");
        alert('hey!!!! I am being removed');
    }

    static getDerivedStateFromError(error){
        // Normally, you might want to display an error message or fallback UI here.
        console.log("This is  getDerivedStateFromError");
        return { hasError: true};
    }

    componentDidCatch(error, info) {
        // You can also log the error to an error reporting service
        console.log("This is componentDidCatch");
      }

    render(){   //this is the 3rd method of mounting it randers the element in dom
        return(
            <>
                <div style={{textAlign:'center'}}>ClassLifecycle</div>
                {console.log("this is rander method")}
                <h1 style={{textAlign:'center'}}>{this.state.count}</h1>
                <h1 style={{background:this.state.color, textAlign:'center'}}>THIS IS THE BG TEXT</h1>
                <div style={{textAlign:'center'}}>
                    <button onClick={()=> this.setState({count:this.state.count + 1})}>Change Count</button>
                    <button onClick={() => this.setState({color: "yellow"})}>Change Color</button>
                </div>
            </>
        )

    }
}

export default ClassLifecycle;
