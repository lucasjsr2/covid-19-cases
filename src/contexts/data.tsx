import React, { useEffect, useState, createContext, ChangeEvent, useContext } from 'react';
import * as api from '../services/api';

interface CovidData {
  uid: number;
  uf: string;
  state: string;
  cases: number;
  deaths: number;
  suspects: number;
  refuses: number;
  datetime: string;
};


interface CovidContextData {
  dados: CovidData[];
  selectedState: string;
  handleSelectedState(e: ChangeEvent<HTMLSelectElement>): void;
}

const CovidContext = createContext<CovidContextData>({} as CovidContextData);

export const DataProvider: React.FC = ({ children }) => {
  const [dados, setDados] = useState<CovidData[]>([]);
  const [selectedState, setSelectedState] = useState("Acre");

  useEffect(() => {
    async function Data() {
      const response = await api.getDataCovid();
  
      // Ordena os estados em ordem alfabética
      const ordenado = response.data.data.sort((a: CovidData, b: CovidData) => {
        return a.state < b.state ? -1 : (a.state > b.state) ? 1 : 0;
      });
      
      setDados(ordenado);
    }
    Data();
  },[])


  function handleSelectedState(e: ChangeEvent<HTMLSelectElement>) {
    const uf = e.target.value;

    setSelectedState(uf);
  }

  return (
    <CovidContext.Provider
      value={{
        dados,
        handleSelectedState,
        selectedState
      }}
    >
      {children}
    </CovidContext.Provider>
  )
}

export default function useCovid() {
  const context = useContext(CovidContext);

  return context;
}