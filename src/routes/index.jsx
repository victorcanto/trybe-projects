import React from 'react';
import { Switch, Route } from 'react-router-dom';

import routes from './routesData';

import styles from './routes.module.scss';

function Routes() {
  return (
    <div className={ styles.container }>
      <Switch>
        {routes.map((route) => (
          <Route key={ route.path } { ...route } />
        ))}
      </Switch>
    </div>
  );
}

export default Routes;
