import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: false,
  }

  render() {
    let authButton
    if (isLoggedIn === true) {
      authButton = <button>logout</button>
    } else {
      authButton = <button>loggin</button>
    }
    return (
      <div className="container">
        <Welcome greeting="Hello" name="User" />
        {authButton}
      </div>
    )
  }
}

export default App
