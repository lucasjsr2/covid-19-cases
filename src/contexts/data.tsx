import React, { createContext, useContext, useEffect, useState } from 'react';
import { fetchCovidData } from '../services/api';
import { StateData } from '../types';

interface CovidContextData {
  stateData: StateData[];
  selectedState: string;
  isLoading: boolean;
  error: string | null;
  setSelectedState: (state: string) => void;
}

const CovidContext = createContext<CovidContextData>({} as CovidContextData);

export const CovidProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [stateData, setStateData] = useState<StateData[]>([]);
  const [selectedState, setSelectedState] = useState('Acre');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchCovidData()
      .then((data) => {
        const sorted = [...data].sort((a, b) => a.state.localeCompare(b.state));
        setStateData(sorted);
      })
      .catch(() => setError('Falha ao carregar dados. Tente novamente mais tarde.'))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <CovidContext.Provider value={{ stateData, selectedState, setSelectedState, isLoading, error }}>
      {children}
    </CovidContext.Provider>
  );
};

export function useCovid(): CovidContextData {
  return useContext(CovidContext);
}
