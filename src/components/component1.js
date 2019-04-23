import React from 'react';
import Component2 from './component2';

export default class Component1 extends React.Component { 
    
    state = {
        text: "button",
        arr:[]
    };

    test = 123;
    function1 = () => {

        this.setState((prevState) => ({
            text: "button Click",
            arr: prevState['arr'].concat('test')
        }));

    }   

    function2(){
        console.log('This is Function 2');
    }

    
    render() {

        return ( 
            <h1>
                {this.test}
                {
                    this.props.title
                }
                <br/>
                <button className="btn btn-outline-danger" onClick={ this.function1 } > 

                    { this.state.text }
                    { this.state.arr.length }

                </button>

                <Component2 {...this.state} />
            </h1>
        )
        // {...} spread key 
    }
}
