import React, { Component } from 'react'
import shortid from 'shortid'
import Button from '@material-ui/core/Button';


class TodoForm extends Component {
    state = {
        text : '',
      }
    
      handleChange = (event) => {
        
        this.setState({
          [event.target.name]: event.target.value
        })
      }
    
      handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit({
            id: shortid.generate(),
            text: this.state.text,
        });
        this.setState({
            text: ''
        })
      }
    
    render() {
        return (
            <div>
              <form onSubmit={this.handleSubmit}>
                <input className="animated lightSpeedIn delay-2s"
                  style={{
                    width: '19vh',
                    height: '34px',
                    border: '2px solid #FF851B',
                    borderRadius:'4px',
                    fontFamily: 'Roboto',
                    paddingLeft: '5px'
                  }}
                  name = 'text'
                  value={this.state.text} 
                  onChange={this.handleChange}
                  type="text" 
                  placeholder="Add Task.."
              />
          <Button className="animated lightSpeedIn delay-3s" 
            onClick={this.handleSubmit} 
            style={{
              marginLeft: '5px',
              border: '2px solid #FF851B',
              background:'white',
              fontFamily: 'Roboto',
              textTransform: 'capitalize'
            }}>
              Add Task
          </Button>
        </form>
      </div>
      )
    }
}

export default TodoForm
