import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import home from './Components/home'
import about from './Components/about'

import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import {
  IonApp,
  IonContent,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonList,
  IonItem,
  IonPage
  
} from '@ionic/react';


class App extends Component {
  render() {
    return (
      <Router>
        <IonApp color="primary">
          <IonMenu side="start" menuId="first" contentId="main">
            <IonHeader>
              <IonToolbar color="primary">
                <IonTitle>Start Menu</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent>
              <IonList>
                <Link to="/"><IonItem>Home</IonItem></Link>
                <Link to="/about"><IonItem>About</IonItem></Link>
              </IonList>
            </IonContent>
            
          </IonMenu>
          <IonContent id="main">
            <Switch>
              <Route path="/" component={home}/>
              <Route path="/about" component={about}/>
            </Switch>
          </IonContent>
        </IonApp>

      </Router>
    );
  }
}

export default App;
