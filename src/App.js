import React, { Component } from 'react'
import axios from 'axios'
import './App.css'

export class App extends Component {

    state = { advice:'', isLoaded: false, }

    componentDidMount(){
        this.setState({advice:''})
        this.fetchAdvice();
    }

    fetchAdvice = () => {
     
        axios.get('https://api.adviceslip.com/advice')
            .then((response) => {
                const { advice } = response.data.slip
                
                this.setState({advice, isLoaded: true,})
            })
            .catch((err) => {
                console.log(err);
            })
    }

    handleClick = () => {
        this.setState({isLoaded: false})
    
        this.fetchAdvice()
    }

    render() {
        const {advice, isLoaded} = this.state
        return (           
            <div className="app">
                <div className="card">                
                    <h1 className="advice">{!isLoaded ? "Loading..." : advice}</h1>
                    <button className="button" onClick={this.handleClick}>
                        <span>Give me ADVICE!</span>
                    </button>
                </div>
            </div>
        )
    }
}

export default App
