import { IonContent, IonApp } from "@ionic/react";
import React from "react";
import "./styles.css";

import Header from '../../components/Header';
import SelectorState from '../../components/SelectorState';
import Cards from '../../components/Cards/';

const Home: React.FC = () => {
  return (
    <IonApp>
      <IonContent>
        <Header />
        <div className="container">
          <SelectorState />
          <Cards />
        </div>
      </IonContent>
    </IonApp>
  );
};

export default Home;
