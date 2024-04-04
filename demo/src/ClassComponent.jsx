
import React from "react"

class ClassComponent extends React.Component{
    render(){
        return(
            <div>
                {console.log(this.props)}
                Hello World! I am a class component
                {console.log(this)};
                <h1>This is Class Component</h1>
                <li>{this.props.name}</li>
                <li>{this.props.address}</li>
                <li>{this.props.wickets}</li>
            </div>
        )
    }
}

export default ClassComponent;