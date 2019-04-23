import React from 'react';
import Item from './item';

export default class listItem extends React.Component {
    

    onRemoveL = (id) =>{
        this.props.onRemoveApp(id);
    }
    render() { 
        return (
            <div>
                {<h1 className="card__header"> Total : { this.props.total } </h1>}
                {
                    this.props.items.length
                    ? 
                        <ul className="card">
                            { 
                                this.props.items.map((item, idx) => {
                                    console.log(item,'in list');
                                    return ( 
                                        <Item title={item.title} number={item.number} id={idx} key={idx} onRemoveL={ this.onRemoveL } {...item} />
                                    )
                                })
                            }
                            </ul>
                    :
                        <div> No value </div>
                }
            </div>
        )
    }
}