import React from 'react';
import { useCovid } from '../../contexts/data';
import SearchableSelect from '../SearchableSelect';
import './styles.css';

const StateSelector: React.FC = () => {
  const { stateData, selectedState, setSelectedState } = useCovid();

  const options = stateData.map((item) => ({
    key: item.uid,
    value: item.state,
    label: item.state,
  }));

  return (
    <div className="selector-container">
      <SearchableSelect
        options={options}
        value={selectedState}
        onChange={setSelectedState}
        label="Estado"
        searchPlaceholder="Buscar estado..."
        modalTitle="Selecionar Estado"
      />
    </div>
  );
};

export default StateSelector;
