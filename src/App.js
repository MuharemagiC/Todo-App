import React, { Component } from 'react'
import TodoForm from './TodoForm'
import Button from '@material-ui/core/Button';


import Todo from './Todo'

class App extends Component {

  state = {
    todos: []
  }

  addTodo = (todo) => {
    this.setState({
      todos: [todo, ...this.state.todos]
    })
    console.log(this.state.todos)
  }

  handleDelete = (id) => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }

  handleDeleteAllTodos = () => {
    this.setState({
      todos: this.state.todos.filter(todo => !todo)
    })
  }

  render() {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        backgroundColor: '#001f3f',
        height: '100vh'
      }}>

      <div style={{marginTop: '100px'}}>
        <div style={{display: 'flex',justifyContent: 'center',}}>
          <h2 className="animated fadeInDown delay-1s" 
              style={{fontFamily: 'Roboto', color: '#FF851B'}}>
                Add Your Tasks:
          </h2>
        </div>
  
        <TodoForm onSubmit={this.addTodo} />
          {this.state.todos.map(todo => (
            <Todo 
              key={todo.id}
              text={todo.text}
              onDelete={() => this.handleDelete(todo.id)} 
            />
        ))}

        <div style={{display: 'flex' ,justifyContent: 'center'}}>
        <Button className='animated fadeInUp delay-1s' 
                onClick={this.handleDeleteAllTodos} 
                style={{
                  border: '2px solid #FF851B',
                  background:'white', 
                  fontFamily: 'Roboto', 
                  textTransform: 'capitalize', 
                  marginTop: '40px'
                }}>
            Remove All Todos
        </Button>
        </div>
      </div>
    </div>
    )

  }
}


export default App