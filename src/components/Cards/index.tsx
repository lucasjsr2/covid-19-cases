import React, { useMemo } from 'react';
import { IonIcon } from '@ionic/react';
import {
  trendingUpOutline,
  alertCircleOutline,
  helpCircleOutline,
  checkmarkCircleOutline,
} from 'ionicons/icons';
import { useCovid } from '../../contexts/data';
import { StateData } from '../../types';
import './styles.css';

interface StatItem {
  label: string;
  value: number;
  colorClass: string;
  icon: string;
}

function buildStats(data: StateData): StatItem[] {
  return [
    {
      label: 'Confirmados',
      value: data.cases,
      colorClass: 'stat--confirmed',
      icon: trendingUpOutline,
    },
    {
      label: 'Mortes',
      value: data.deaths,
      colorClass: 'stat--deaths',
      icon: alertCircleOutline,
    },
    {
      label: 'Suspeitos',
      value: data.suspects,
      colorClass: 'stat--suspects',
      icon: helpCircleOutline,
    },
    {
      label: 'Recuperados',
      value: data.refuses,
      colorClass: 'stat--recovered',
      icon: checkmarkCircleOutline,
    },
  ];
}

const Cards: React.FC = () => {
  const { stateData, selectedState } = useCovid();

  const currentState = useMemo(
    () => stateData.find((s) => s.state === selectedState),
    [stateData, selectedState]
  );

  if (!currentState) return null;

  const stats = buildStats(currentState);

  return (
    <div className="stats-container">
      <div className="stats-grid">
        {stats.map(({ label, value, colorClass, icon }) => (
          <div key={label} className={`stat-card ${colorClass}`}>
            <IonIcon icon={icon} className="stat-icon" aria-hidden="true" />
            <span className="stat-value">{value.toLocaleString('pt-BR')}</span>
            <span className="stat-label">{label}</span>
          </div>
        ))}
      </div>
      {currentState.datetime && (
        <p className="stats-updated">
          Atualizado em {new Date(currentState.datetime).toLocaleDateString('pt-BR')}
        </p>
      )}
    </div>
  );
};

export default Cards;
