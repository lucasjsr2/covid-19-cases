import React from 'react';
import { IonApp } from '@ionic/react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { CovidProvider } from './contexts/data';
import Home from './pages/Home';

const AppRoutes: React.FC = () => (
  <CovidProvider>
    <IonApp>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </BrowserRouter>
    </IonApp>
  </CovidProvider>
);

export default AppRoutes;
