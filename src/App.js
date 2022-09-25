import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: false,
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="container">
        <Welcome />
        {isLoggedIn && <button>logout</button>}
        {!isLoggedIn && <button>loggin</button>}
      </div>
    )
  }
}

export default App
