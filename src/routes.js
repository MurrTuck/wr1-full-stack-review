import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Landing from './components/Landing'
import Register from './components/Register'
import Profile from './components/Profile'
import Dashboard from './components/Dashboard'

export default (
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/profile" component={Profile} />
    </Switch>

)