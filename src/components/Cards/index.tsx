import React from 'react';
import { IonCard, IonRow, IonCol, IonLabel, IonGrid } from '@ionic/react';
import './styles.css';
import useCovid from '../../contexts/data';

const Cards: React.FC = () => {
  const { dados, selectedState } = useCovid();

  return (
    <div className="card-cases">
      <IonGrid>
        <IonCard className="card">
          <IonRow className="card-row">
            {dados
              .filter((dado) => dado.state === selectedState)
              .map((stateFiltered) => (
                <IonCol key={stateFiltered.uid} className="col-card">
                  <IonLabel color="warning" className="number-case">
                    {stateFiltered.cases.toLocaleString('pt-BR')}
                  </IonLabel>
                  <IonLabel className="title-case">Confirmados</IonLabel>
                </IonCol>
              ))}

            {dados
              .filter((dado) => dado.state === selectedState)
              .map((stateFiltered) => (
                <IonCol key={stateFiltered.uid} className="col-card">
                  <IonLabel color="danger" className="number-case">
                    {stateFiltered.deaths.toLocaleString('pt-BR')}
                  </IonLabel>
                  <IonLabel className="title-case">Mortes</IonLabel>
                </IonCol>
              ))}
          </IonRow>

          <IonRow className="card-row">
            {dados
              .filter((dado) => dado.state === selectedState)
              .map((stateFiltered) => (
                <IonCol key={stateFiltered.uid} className="col-card">
                  <IonLabel color="secondary" className="number-case">
                    {stateFiltered.suspects.toLocaleString('pt-BR')}
                  </IonLabel>
                  <IonLabel className="title-case">Suspeitos</IonLabel>
                </IonCol>
              ))}

            {dados
              .filter((dado) => dado.state === selectedState)
              .map((stateFiltered) => (
                <IonCol key={stateFiltered.uid} className="col-card">
                  <IonLabel color="success" className="number-case">
                    {stateFiltered.refuses.toLocaleString('pt-BR')}
                  </IonLabel>
                  <IonLabel className="title-case">Recuperados</IonLabel>
                </IonCol>
              ))}
          </IonRow>
        </IonCard>
      </IonGrid>
    </div>
  );
};

export default Cards;