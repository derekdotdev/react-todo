import React, {Component} from 'react'

class TodoApp extends Component {

    render() {
        return (
            <div className='TodoApp'>
                <LoginComponent/>    
            </div>
        )
    }
}

class LoginComponent extends Component {
    
    // Create state inside for both props
    constructor(props) {
        super(props)
        this.state = {
            username: 'derekdotdev',
            password: ''
        }
        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
    }
    
    handleUsernameChange(event) {
        this.setState({username:event.target.value})
    }

    handlePasswordChange(event) {
        this.setState({password:event.target.value})
    }

    render() {
        return(
            <div>
                User Name: <input type='text' name='username' value={this.state.username} onChange={this.handleUsernameChange}/>
                Password: <input type='password' name='password' value={this.state.password} onChange={this.handlePasswordChange}/>
                <button>Login</button>
            </div>
        )
    }
}


export default TodoApp