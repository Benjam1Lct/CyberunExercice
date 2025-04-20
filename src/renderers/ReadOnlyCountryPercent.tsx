// HOC de JSONForms qui injecte automatiquement les props nécessaires depuis le contexte
import { withJsonFormsArrayControlProps } from '@jsonforms/react';

// Import du fichier CSS dédié aux tableaux pays/percentages
import '../styles/table.css'; 

// Composant de rendu lecture seule pour le champ "i01" (liste de pays + pourcentages)
const ReadOnlyCountryPercent = ({ data, label, description }: any) => {
  return (
    <div className="country-percent-container">
      {/* Titre centré du champ */}
      <div className="country-percent-title">{label}</div>

      {/* Description (optionnelle), centrée et en plus petit */}
      {description && <div className="country-percent-description">{description}</div>}

      {/* Affichage des pays et pourcentages en ligne (gauche/droite) */}
      {(data || []).map((entry: any, index: number) => (
        <div key={index} className="country-percent-entry">
          <span className="country-name">{entry.country}</span>
          <span className="country-percent">{entry.percent} %</span>
        </div>
      ))}
    </div>
  );
};

// HOC qui connecte ce composant à JSONForms pour l’utiliser comme renderer
export default withJsonFormsArrayControlProps(ReadOnlyCountryPercent);
