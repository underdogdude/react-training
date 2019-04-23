import React from 'react';

export default class formItem extends React.Component { 

    submit = (e) => {
        e.preventDefault();
        let title = this.form.title.value;
        let number = this.form.number.value;

        this.props.onSubmit({ title, number});
    }

    clear = () =>  {
        this.form.reset()
    }
    
    render() {
        return (
            <div className="">
                <h2 className="create__input_head"> Enter List</h2>
                <form onSubmit={this.submit} ref={(el) => this.form = el}  >
                    <input 
                        type="text"
                        name="title"
                        className="create__input create__input_title" 
                        autoComplete="off" 
                        placeholder="title" 
                    />
                    <input 
                        type="number"
                        name="number"
                        className="create__input create__input_title" 
                        autoComplete="off" 
                        placeholder="number" 
                    />
                    <button
                        type="submit"
                        className="button button__create"
                    >
                        create
                    </button>
                    <button
                        type="button"
                        className="button button__clear"
                        onClick={this.clear}
                    >
                        clear
                    </button>

                </form>
            </div>
        )
    }
}