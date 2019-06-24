import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getSmurfs, addSmurfs } from '../actions'
import SmurfList from './SmurfList'

class App extends Component {
  state = {
    smurfs: {
      name: '',
      age: '',
      height: ''
    }
  }

  componentDidMount() {
    this.props.getSmurfs()
  }

  handleChanges = e => {
    this.setState({
      smurfs: {
        ...this.state.smurfs,
        [e.target.name]: e.target.value
      }
    })
  }

   addSmurf = e => {
        e.preventDefault()
        this.props.addSmurfs(this.state.smurfs)
        this.setState({
            smurfs: {
                name: '',
                age: '',
                height: ''
            },
        })
    }

  render() {
    return (
      
      <div className="App">
       <SmurfList smurfs={this.props.smurfs}/>
        <form onSubmit={this.handleSubmit}>
                    <h2>Enter a new smurf!</h2>
                    <input 
                        type="text"
                        value={this.state.smurfs.name}
                        name="name"
                        onChange={this.handleChanges}
                        placeholder="Name"
                        required
                    />
                    <input 
                        type="text"
                        value={this.state.smurfs.age}
                        name="age"
                        onChange={this.handleChanges}
                        placeholder="Age"
                    />
                    <input 
                        type="text"
                        value={this.state.smurfs.height}
                        name="height"
                        onChange={this.handleChanges}
                        placeholder="Height"
                    />
                    <button onClick={this.addSmurf}>Add Smurf</button>
                    
                </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  
  error: state.error,
  fetchingData: state.fetchingData,
  smurfs: state.smurfs,
  addSmurfs: state.addSmurfs
})


export default connect(
  mapStateToProps,
  {
    getSmurfs, addSmurfs,
  }
)(App);
