import React from "react";
import AddTodoComponent from "./AddTodoComponent";
import './listTodo.scss';
import { toast } from 'react-toastify';
class ListTodoComponent extends React.Component {

    state = {
        listTodo: [
            {id:'todo1', title:'Doing homework'},
            {id:'todo2', title:'Making video'},
            {id:'todo3', title:'Fixing bugs'},
        ],
        editTodo: {}
    }
    
    addNewTodo = (todo) => {
        this.setState({
            listTodo:[...this.state.listTodo, todo]
        })
        toast.success("Wow so easy!");
    }
    handleDeleteTodo = (todo) => {
        let currenTodos = this.state.listTodo;
        currenTodos = currenTodos.filter(item => item.id !== todo.id);
        this.setState({
            listTodo: currenTodos
        })
        toast.success("Delete succeed!");
    }

    handleEditTodo = (todo) => {
        let { editTodo, listTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        if (!isEmptyObj && editTodo.id === todo.id) {
            let listTodoCopy = [ ...listTodo ];
            let objIndex = listTodoCopy.findIndex((obj => obj.id === todo.id))
            listTodoCopy[objIndex].title = editTodo.title;
            this.setState({
                listTodo: listTodoCopy,
                editTodo: {}
            })
            toast.success("Update succeed!");
            return;
        } 
        this.setState({
            editTodo: todo
        })
    }
    handleOnChangeEditTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }
    render() {
        let { listTodo, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        return (
            <>
                <p>
                Simple TODO Apps with React.js
                </p>
                <div className="list-todo-container">
                    <AddTodoComponent
                        addNewTodo = {this.addNewTodo}
                    />
                    <div className="list-todo-content">
                        {listTodo && listTodo.length > 0 && 
                            listTodo.map((item, index) => {
                                return (
                                    <div className="todo-child" key={item.id}>
                                        {isEmptyObj ?
                                            <span>{index + 1}-{item.title} </span>
                                            :
                                            <>
                                                {editTodo.id === item.id ?
                                                    <span>{index + 1} - <input value={editTodo.title} onChange={(event)=>this.handleOnChangeEditTodo(event)} /></span>
                                                    :
                                                    <span>{index + 1}-{item.title} </span>
                                                }
                                            </>
                                            
                                        }
                                        {/* <input value={item.title}/> */}
                                        <button className="btn-edit" onClick={() => this.handleEditTodo(item)}>{!isEmptyObj && editTodo.id === item.id ? 'Save':'Edit'}</button>
                                        <button className="btn-delete" onClick={()=>this.handleDeleteTodo(item)}>Delete</button>
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                </div>
            </>

        )
    }
}

export default ListTodoComponent;