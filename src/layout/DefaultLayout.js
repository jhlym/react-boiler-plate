import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import { Page1, Page2, Page3 } from '../pages';

const DefaultLayout = () => {
  return (
    <>
      {/* Header */}
      {/* Sidebar */}
      <Switch>
        <Route exact path="/page/1" component={Page1} />
        <Route exact path="/page/2" component={Page2} />
        <Route exact path="/page/3" component={Page3} />
        <Route exact path="/" component={Page1} />
        <Redirect to="/404" />
      </Switch>
    </>
  )
}

export default DefaultLayout;
