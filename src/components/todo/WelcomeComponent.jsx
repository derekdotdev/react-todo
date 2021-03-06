import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import HelloWorldService from '../../api/todo/HelloWorldService.js'

class WelcomeComponent extends Component {
    
    constructor(props) {
        super(props)

        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)

        
        this.state = {
            welcomeMessage : '',
            errorMessage : '',
            hasHttpError: false
        }

        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
        this.handleError = this.handleError.bind(this)
    }
    
    render() {
        return (
            <>
                <div>
                    {this.state.hasHttpError && <div className="alert alert-warning">{this.state.errorMessage}</div>} 
                </div>
                {<div className="errorMessage"></div>}
                <h1>Welcome!</h1>
                <div className="container">
                    Welcome {this.props.params.name}. 
                    You can manage your todos <Link to="/todos">here</Link>      
                </div>
                <div className="container">
                    Click here to get a customized welcome message.   <br></br>
                    <button className="btn-success" onClick={this.retrieveWelcomeMessage}>Get Welcome Message</button>
                </div>
                <div className="container">
                    {this.state.welcomeMessage}
                </div>
            </>
        )
    }

    retrieveWelcomeMessage() {
        // API call which Returns String
        // HelloWorldService.executeHelloWorldService()
        // .then(response => this.handleSuccessfulResponse(response)) 

        // API call which Returns JSON Object
        // HelloWorldService.executeHelloWorldBeanService()
        // .then(response => this.handleSuccessfulResponse(response))
        // .catch(console.log('ERROR!'));   

        // API call with Path Variable
        HelloWorldService.executeHelloWorldPathVariableService(this.props.params.name)
        .then( response => this.handleSuccessfulResponse(response))
        .catch( error => this.handleError(error))

    }

    handleSuccessfulResponse(response) {
        // (String returned)
        // this.setState({welcomeMessage: response.data})

        //Bean (Need to extract String message)
        this.setState({welcomeMessage: response.data.message})
    }

    handleError(error) {
        console.log(error.response)
        this.setState({hasHttpError: true})
        this.setState({errorMessage: error.response.data.message})
    }

}

export default WelcomeComponent