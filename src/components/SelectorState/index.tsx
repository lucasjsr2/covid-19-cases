import React from 'react';
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import './styles.css';
import useCovid from '../../contexts/data';

const SelectorState: React.FC = () => {
  const { dados, selectedState, handleSelectedState } = useCovid();

  return (
    <IonGrid>
      <IonRow>
        <IonCol className="container-selector">
          <span className="title">Escolha um estado</span>

          <div className="state">
            <select onChange={handleSelectedState} value={selectedState} className="selector" name="state" id="state">
              {dados.map((estado) => (
                <option key={estado.uid} value={estado.state}>{estado.state}</option>
              ))}
            </select>
          </div>
          
        </IonCol>
      </IonRow>
    </IonGrid>
  )
}

export default SelectorState;