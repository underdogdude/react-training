import React from 'react';


class item extends React.Component { 

    onRemoveIT = () => { 
        this.props.onRemoveL(this.props.id) 
    }
    
    render () {

        return (
            <div className=" padding-30 card__title">
                <h3> Title: { this.props.title} </h3>
                <p> Number: { this.props.number} </p>
                <button className="button button__remove" onClick={ this.onRemoveIT } > 
                    remove
                </button>
            </div>
        )
    }
}

export default item;
