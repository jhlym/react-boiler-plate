import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';
import CenterLoading from './components/Loading/CenterLoading';

const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'));
const AuthLayout = React.lazy(() => import('./layout/AuthLayout'));

function App() {
  return (
    <>
      <Suspense fallback={<CenterLoading />}>
        <Route to="/auth" component={AuthLayout} />
        <Route to="/" component={DefaultLayout} />
      </Suspense>
    </>
  );
}

export default App;
