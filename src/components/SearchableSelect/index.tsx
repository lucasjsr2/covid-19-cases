import React, { useMemo, useState } from 'react';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { checkmarkOutline, chevronDownOutline } from 'ionicons/icons';
import './styles.css';

interface SelectOption {
  key: number;
  value: string;
  label: string;
}

interface SearchableSelectProps {
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  label?: string;
  searchPlaceholder?: string;
  modalTitle?: string;
}

const SearchableSelect: React.FC<SearchableSelectProps> = ({
  options,
  value,
  onChange,
  label = 'Selecionar',
  searchPlaceholder = 'Buscar...',
  modalTitle = 'Selecionar',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');

  const filtered = useMemo(
    () => options.filter((o) => o.label.toLowerCase().includes(query.toLowerCase())),
    [options, query]
  );

  function handleSelect(val: string) {
    onChange(val);
    setIsOpen(false);
    setQuery('');
  }

  function handleDismiss() {
    setIsOpen(false);
    setQuery('');
  }

  return (
    <>
      <button
        type="button"
        className="ss-trigger"
        onClick={() => setIsOpen(true)}
        aria-haspopup="dialog"
        aria-label={`${label}: ${value}`}
      >
        <span className="ss-trigger-label">{label}</span>
        <span className="ss-trigger-value">{value}</span>
        <IonIcon icon={chevronDownOutline} className="ss-trigger-chevron" aria-hidden="true" />
      </button>

      <IonModal isOpen={isOpen} onDidDismiss={handleDismiss}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>{modalTitle}</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={handleDismiss} fill="clear">
                Fechar
              </IonButton>
            </IonButtons>
          </IonToolbar>
          <IonToolbar>
            <IonSearchbar
              value={query}
              onIonInput={(e) => setQuery(e.detail.value ?? '')}
              placeholder={searchPlaceholder}
              debounce={0}
              animated
            />
          </IonToolbar>
        </IonHeader>

        <IonContent>
          {filtered.length === 0 ? (
            <p className="ss-empty">Nenhum resultado encontrado.</p>
          ) : (
            <IonList lines="full">
              {filtered.map((option) => (
                <IonItem
                  key={option.key}
                  button
                  detail={false}
                  onClick={() => handleSelect(option.value)}
                  className={option.value === value ? 'ss-item-selected' : ''}
                >
                  <IonLabel>{option.label}</IonLabel>
                  {option.value === value && (
                    <IonIcon
                      icon={checkmarkOutline}
                      slot="end"
                      color="primary"
                      aria-hidden="true"
                    />
                  )}
                </IonItem>
              ))}
            </IonList>
          )}
        </IonContent>
      </IonModal>
    </>
  );
};

export default SearchableSelect;
