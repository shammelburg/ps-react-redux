import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from '../common/header/Header'

// Pages
import CoursesPage from './courses/CoursesPage'
import HomePage from './home/HomePage'
import AboutPage from './about/AboutPage'
import PageNotFound from './PageNotFound'

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/courses" component={CoursesPage} />
          <Route path="/about" component={AboutPage} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </>
  )
}

export default App
