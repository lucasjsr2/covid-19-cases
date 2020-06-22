import React from 'react';
import { IonHeader, IonToolbar, IonImg } from '@ionic/react';

import Background from "../../assets/background.jpg";
import './styles.css';

const Header: React.FC = () => {
  return (
    <IonHeader className="header">
      <IonToolbar>
        <IonImg className="backImage" src={Background} />
      </IonToolbar>
    </IonHeader>
  );
}

export default Header;