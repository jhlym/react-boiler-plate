import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import CenterLoading from './components/Loading/CenterLoading';

const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'));
const AuthLayout = React.lazy(() => import('./layout/AuthLayout'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <>
      <Helmet>
        <title>title</title>
      </Helmet>
      <Suspense fallback={<CenterLoading />}>
        <Switch>
          <Route exact path="/404" component={NotFound} />
          <Route path="/auth" component={AuthLayout} />
          <Route path="/" component={DefaultLayout} />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
