import React from 'react';
import { IonContent, IonPage, IonSpinner, IonText } from '@ionic/react';
import Header from '../../components/Header';
import StateSelector from '../../components/SelectorState';
import Cards from '../../components/Cards';
import { useCovid } from '../../contexts/data';
import './styles.css';

const Home: React.FC = () => {
  const { isLoading, error } = useCovid();

  return (
    <IonPage>
      <IonContent fullscreen>
        <Header />
        <div className="home-content">
          {isLoading && (
            <div className="loading-container">
              <IonSpinner name="crescent" />
            </div>
          )}
          {error && (
            <IonText color="danger">
              <p className="error-text">{error}</p>
            </IonText>
          )}
          {!isLoading && !error && (
            <>
              <StateSelector />
              <Cards />
            </>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
