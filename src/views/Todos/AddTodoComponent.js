import React from "react";
import { toast } from 'react-toastify';
class AddTodoComponent extends React.Component {

    state = {
        title:''
    }

    handleAddNewTodo = () => {
        if (!this.state.title) {
            toast.error("missing title");
            return;
        }
        let data = {
            id: Math.floor(Math.random() * 1001),
            title: this.state.title
        }
        this.props.addNewTodo(data);
        
        this.setState({
            title: ''
        })
    }
    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    render() {
        let { title } = this.state;
        return (
            <div className="add-todo">
                <input type='text' value={title} onChange={ (event)=>this.handleOnChangeTitle(event)} />
                <button type="button" className="btn-add" onClick={()=>this.handleAddNewTodo()}>Add</button>
            </div>
        )
    }
}

export default AddTodoComponent;