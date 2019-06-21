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
      friends: {
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
        <p>hello</p>
       <SmurfList smurfs={this.props.smurfs}/>
       
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.error,
  fetchingSmurf: state.fetchingSmurf,
  smurfs: state.smurfs,
  addSmurfs: state.addSmurfs
})


export default connect(
  mapStateToProps,
  {
    getSmurfs, addSmurfs,
  }
)(App);
