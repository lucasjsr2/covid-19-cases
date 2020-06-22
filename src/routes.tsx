import React from 'react';
import { IonReactRouter } from '@ionic/react-router';
import { IonRouterOutlet, IonApp } from '@ionic/react';
import { Route, Redirect } from 'react-router';

import Home from './pages/Home';
import { DataProvider } from './contexts/data';


const Routes = () => {
  return (
    <DataProvider>
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route path="/home" component={Home} exact={true} />
            <Route exact path="/" render={() => <Redirect to="/home" />} />
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    </DataProvider>
    
  );
};

export default Routes;
