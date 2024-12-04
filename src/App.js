import {Route, Switch, Redirect} from 'react-router-dom'
import {useState} from 'react'
import UserContext from './Context/UserContext'

import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'
import './App.css'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here
const App = () => {
  const [username, setUsername] = useState('')
  const [topic, setTopic] = useState('')
  // const [isRegistered, setIsRegistered] = useState(false)

  return (
    <UserContext.Provider
      value={{
        username,
        setUsername,
        topic,
        setTopic,
      }}
    >
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
    </UserContext.Provider>
  )
}

export default App
