import React from 'react';

// Variable outside class can use directly
const a = '1';
const arr = [1,2,3,4,5,6,7,8,9,0];

export default class formItem extends React.Component {

    submit = (e) => {
        e.preventDefault();
        console.log(e.target.input2.value);
    }

    clear = () => { 
        console.log(this,'this');
        console.log(a);
        this.form.reset();
    }

    render() {
        return (
            // ref is binding element
            <form onSubmit={ this.submit } ref={(el) => {this.form = el }} >

                <input name="input1" type="text" placeholder="enter something" />
                <input name="input2" type="text" placeholder="enter something" />
                <div className="py-2 d-flex align-items-center justify-content-center">
                    {
                        arr.map((i) => { 
                            return(
                                <button className="btn btn-sm mx-1 btn-outline-secondary" key={i} >{i}</button>
                                )
                            }
                        )
                    }
                    {
                        (() => { 
                            if(arr.length > 0 ) {
                                console.log('bite');
                            }
                        })()
                    }
                </div>
                
                <div className="py-2 d-flex align-items-center justify-content-center">
                    <button type="submit" className="btn btn-outline-primary mr-2">
                        Submit
                    </button>
                    <button type="button" className="btn btn-outline-warning " onClick={ this.clear }>
                        clear
                    </button>
                </div>
            </form>
        )
    }
}